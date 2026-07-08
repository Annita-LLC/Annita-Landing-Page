import { google } from 'googleapis';
import { config } from '../config/index.js';
import { logger } from './logger.js';

let auth: any = null;

try {
  const jsonStr = config.googleSheets.serviceAccountJson;
  const spreadsheetId = config.googleSheets.spreadsheetId;

  if (jsonStr && spreadsheetId) {
    const credentials = JSON.parse(jsonStr);
    auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    logger.info('Google Sheets API client initialized successfully.');
  } else {
    logger.warn('Google Sheets configuration is partially or fully missing. Integration will run in dry-run mode.', {
      hasSpreadsheetId: !!spreadsheetId,
      hasServiceAccount: !!jsonStr,
    });
  }
} catch (error) {
  logger.error('Failed to initialize Google Sheets authentication client', {
    error: error instanceof Error ? error.message : String(error),
  });
}

/**
 * Appends a row of values to a specified sheet/tab in the Google Spreadsheet.
 * This is non-blocking (fire-and-forget) from the route's perspective, but executes
 * asynchronously with full error handling.
 * 
 * @param sheetName The name of the tab in the spreadsheet (e.g. 'Beta Signups')
 * @param values An array of cells representing the row to append
 */
export async function appendToSheet(sheetName: string, values: any[]) {
  const spreadsheetId = config.googleSheets.spreadsheetId;
  
  if (!auth || !spreadsheetId) {
    logger.info(`Google Sheets write skipped (dry-run mode) for tab "${sheetName}":`, { values });
    return;
  }

  try {
    const sheets = google.sheets({ version: 'v4', auth });
    const range = `${sheetName}!A:A`;
    
    logger.info(`Appending row to Google Sheet tab "${sheetName}"...`);
    
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    logger.info(`Google Sheets write succeeded for tab "${sheetName}"`, {
      updatedRange: response.data.updates?.updatedRange,
      updatedRows: response.data.updates?.updatedRows,
    });
  } catch (error) {
    logger.error(`Google Sheets append error for tab "${sheetName}"`, {
      error: error instanceof Error ? error.message : String(error),
      values,
    });
  }
}

// ============================================================================
// COLUMN HEADER DEFINITIONS
// ============================================================================
const SHEET_HEADERS: Record<string, string[]> = {
  'Beta Signups': [
    'Timestamp', 'ID', 'Role', 'Full Name', 'Email', 'Phone', 'Country',
    'Queue Position', 'Status', 'Device', 'Business / Company Name',
    'Business Category', 'Shops For', 'Pay Method', 'Needs / Service Types',
    'Areas Covered', 'Fleet Size', 'IP Address', 'User Agent',
  ],
  'Contact': [
    'Timestamp', 'ID', 'Name', 'Email', 'Phone', 'Subject', 'Message',
    'Status', 'IP Address', 'User Agent',
  ],
  'Newsletter': [
    'Timestamp', 'ID', 'Email', 'Status', 'IP Address', 'User Agent',
  ],
  'Contact Sales': [
    'Timestamp', 'ID', 'Name', 'Email', 'Phone', 'Company Name',
    'Project Description', 'Budget', 'Status', 'IP Address', 'User Agent',
  ],
  'Custom Solutions': [
    'Timestamp', 'ID', 'Full Name', 'Email', 'Phone', 'Organization',
    'Job Title', 'Org Type', 'Country', 'Project Name', 'Project Summary',
    'Solution Types', 'Target Users', 'User Count', 'Geographic Deployment',
    'Geographic Country', 'Languages', 'Offline Required', 'Budget',
    'Timeline', 'Status', 'IP Address', 'User Agent',
  ],
};

/**
 * Writes column header rows to each sheet tab if row 1 is still empty.
 * Safe to call on every server startup — it will not overwrite existing headers.
 */
export async function setupSheetHeaders(): Promise<void> {
  const spreadsheetId = config.googleSheets.spreadsheetId;

  if (!auth || !spreadsheetId) {
    logger.info('Google Sheets header setup skipped (dry-run mode).');
    return;
  }

  const sheets = google.sheets({ version: 'v4', auth });

  for (const [sheetName, headers] of Object.entries(SHEET_HEADERS)) {
    try {
      // Check if row 1 already has content
      const existing = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!A1:A1`,
      });

      const hasHeader = existing.data.values && existing.data.values.length > 0;

      if (hasHeader) {
        logger.info(`Sheet "${sheetName}" already has a header row — skipping.`);
        continue;
      }

      // Write the header row
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [headers] },
      });

      logger.info(`Header row written to sheet "${sheetName}" (${headers.length} columns).`);
    } catch (error) {
      logger.error(`Failed to write header row for sheet "${sheetName}"`, {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
}
