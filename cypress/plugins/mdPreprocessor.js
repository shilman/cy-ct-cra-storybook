const fs = require('fs');
function mdPreprocessor(file) {
  const { filePath, outputPath, shouldWatch } = file;
  console.log({ filePath, outputPath, shouldWatch });
  // we need to output something
  fs.writeFileSync(outputPath, '', 'utf8');
  return outputPath;
}
module.exports = mdPreprocessor;
