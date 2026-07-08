// ============================================================================
// ANNITA LANDING PAGE SERVER - WRITE SHEET HEADERS SCRIPT
// ============================================================================
// Run this once (or whenever you add a new tab) to write column title rows.
// Safe to re-run — skips any tab that already has a header in row 1.
// ============================================================================

import dotenv from 'dotenv';
import { setupSheetHeaders } from '../src/lib/google-sheets.js';

dotenv.config();

console.log('📝 Writing column headers to all Google Sheet tabs...');

setupSheetHeaders()
  .then(() => {
    console.log('✅ All headers written successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Failed to write headers:', err);
    process.exit(1);
  });
