// ============================================================================
// ANNITA LANDING PAGE SERVER - GOOGLE SHEETS TEST SCRIPT
// ============================================================================
// Verifies connection and credentials with Google Sheets API by appending test rows.
// ============================================================================

import dotenv from 'dotenv';
import { appendToSheet } from '../src/lib/google-sheets.js';

dotenv.config();

async function testSheets() {
  console.log('🔍 Running Google Sheets integration verification test...');
  console.log('Sheet ID:', process.env.GOOGLE_SHEETS_ID);
  
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    console.log('⚠️ GOOGLE_SERVICE_ACCOUNT_JSON is not set. The script will run in dry-run mode.');
  }

  const timestamp = new Date().toISOString();
  
  console.log('\n--- 1. Testing Beta Signups tab ---');
  await appendToSheet('Beta Signups', [
    timestamp,
    'test-id-1',
    'buyer',
    'Test Buyer User',
    'buyer@test.com',
    '1234567890',
    'US',
    '42',
    'pending',
    'desktop',
    '',
    '',
    'Electronics, Clothing',
    'credit_card',
    '',
    '',
    '',
    '127.0.0.1',
    'Mozilla/5.0 (Test)'
  ]);

  console.log('\n--- 2. Testing Contact tab ---');
  await appendToSheet('Contact', [
    timestamp,
    'test-id-2',
    'Test Contact User',
    'contact@test.com',
    '1234567890',
    'General Inquiry',
    'This is a test message to verify the connection.',
    'new',
    '127.0.0.1',
    'Mozilla/5.0 (Test)'
  ]);

  console.log('\n--- 3. Testing Newsletter tab ---');
  await appendToSheet('Newsletter', [
    timestamp,
    'test-id-3',
    'newsletter@test.com',
    'active',
    '127.0.0.1',
    'Mozilla/5.0 (Test)'
  ]);

  console.log('\n--- 4. Testing Contact Sales tab ---');
  await appendToSheet('Contact Sales', [
    timestamp,
    'test-id-4',
    'Test Sales User',
    'sales@test.com',
    '1234567890',
    'Acme Corp',
    'Looking to scale enterprise logistics systems.',
    '$10k-$50k',
    'new',
    '127.0.0.1',
    'Mozilla/5.0 (Test)'
  ]);

  console.log('\n--- 5. Testing Custom Solutions tab ---');
  await appendToSheet('Custom Solutions', [
    timestamp,
    'test-id-5',
    'Test Solutions User',
    'solutions@test.com',
    '1234567890',
    'Global Logistics Inc',
    'Director of Logistics',
    'Enterprise',
    'CA',
    'Logistics Dashboard v2',
    'Need to rebuild legacy portal to support multiple languages and offline mode.',
    'Custom Portal, Mobile App',
    '5000+ drivers',
    '10,000+',
    'North America, Europe',
    'US, CA',
    'English, French',
    'yes',
    '$100k+',
    '3-6 months',
    'new',
    '127.0.0.1',
    'Mozilla/5.0 (Test)'
  ]);

  console.log('\n✅ Verification checks finished.');
}

testSheets()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('❌ Integration test failed:', err);
    process.exit(1);
  });
