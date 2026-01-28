import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve(); // since __dirname is not available in ES modules

const inputFolder = path.join(__dirname, 'public');
const outputFolder = path.join(__dirname, 'public_webp');

if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });

const supportedFormats = ['.png', '.jpg', '.jpeg', '.avif'];

function processFolder(currentInput, currentOutput) {
  if (!fs.existsSync(currentOutput)) fs.mkdirSync(currentOutput, { recursive: true });

  fs.readdirSync(currentInput).forEach(file => {
    const inputPath = path.join(currentInput, file);
    const outputPath = path.join(currentOutput, file);

    if (fs.lstatSync(inputPath).isDirectory()) {
      processFolder(inputPath, outputPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (supportedFormats.includes(ext)) {
        const outputFileName = path.basename(file, ext) + '.webp';
        const finalOutputPath = path.join(currentOutput, outputFileName);

        sharp(inputPath)
          .resize({ width: 600 })
          .webp({ quality: 80 })
          .toFile(finalOutputPath)
          .then(() => console.log(`${inputPath} → ${finalOutputPath}`))
          .catch(err => console.error(err));
      }
    }
  });
}

console.log('Compression started...');
processFolder(inputFolder, outputFolder);
