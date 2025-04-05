const fs = require('fs');
const path = require('path');

// Define file path
const filePath = path.join(__dirname, 'demo.txt');

// ✅ 1. Create or overwrite a file (writeFileSync)
fs.writeFileSync(filePath, 'This is the initial content.\n');
console.log('✅ File created and content written.');

// ✅ 2. Append data (appendFileSync)
fs.appendFileSync(filePath, 'Appending this line.\n');
console.log('✅ Data appended.');

// ✅ 3. Read the file (readFileSync)
const data = fs.readFileSync(filePath, 'utf8');
console.log('📄 File content:\n' + data);

// ✅ 4. Rename the file (renameSync)
const newFilePath = path.join(__dirname, 'renamed_demo.txt');
fs.renameSync(filePath, newFilePath);
console.log('✅ File renamed.');

// ✅ 5. Delete the file (unlinkSync)
fs.unlinkSync(newFilePath);
console.log('🗑️ File deleted.');
