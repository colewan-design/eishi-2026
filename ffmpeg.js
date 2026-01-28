import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegPath);

const videosDir = path.join(process.cwd(), 'public', 'videos');

fs.readdir(videosDir, (err, files) => {
    const targetFile = 'warehouse.mp4';
    const inputPath = path.join(videosDir, targetFile);

    if (!fs.existsSync(inputPath)) {
        console.error('File not found:', targetFile);
        process.exit(1);
    }

    const outputFileName = 'warehouse.webm';
    const outputPath = path.join(videosDir, outputFileName);

    ffmpeg(inputPath)
        .outputOptions([
            '-vf scale=1280:-2',
            '-r 24',
            '-crf 28',
            '-g 1',
            '-movflags +faststart'
        ])
        .toFormat('webm')
        .save(outputPath)
        .on('end', () => console.log(`✅ Converted: ${targetFile} → ${outputFileName}`))
        .on('error', (err) => console.error(`❌ Error converting ${targetFile}:`, err));
});
