import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegPath);

// Folder with WebM files
const videosDir = path.join(process.cwd(), 'public', 'eishi', 'videos');

// Read all files in the folder
fs.readdir(videosDir, (err, files) => {
  if (err) {
    console.error('❌ Failed to read videos folder:', err);
    process.exit(1);
  }

  // Filter only .webm files
  const webmFiles = files.filter(file => file.endsWith('.webm'));

  if (webmFiles.length === 0) {
    console.log('No WebM files found in folder.');
    return;
  }

  // Convert each WebM to MP4
  webmFiles.forEach(file => {
    const inputPath = path.join(videosDir, file);
    const outputPath = path.join(videosDir, file.replace('.webm', '.mp4'));

    ffmpeg(inputPath)
      .outputOptions([
        '-vf scale=1280:-2',
        '-c:v libx264',
        '-profile:v main',
        '-pix_fmt yuv420p',
        '-crf 23',
        '-preset slow',
        '-r 24',
        '-movflags +faststart',
        '-c:a aac',
        '-b:a 128k'
      ])
      .toFormat('mp4')
      .save(outputPath)
      .on('end', () => {
        console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`);
      })
      .on('error', err => {
        console.error(`❌ Error converting ${file}:`, err);
      });
  });
});
