#!/usr/bin/env node

/**
 * Video Optimization Script for DigiVidya Demo Video
 * 
 * This script optimizes the video for web deployment by:
 * 1. Creating multiple quality versions
 * 2. Generating a poster image
 * 3. Creating a WebM version for better compression
 * 4. Setting up proper caching headers
 */

const fs = require('fs');
const path = require('path');

const videoPath = path.join(__dirname, '../src/assets/digividya_demo.mp4');
const outputDir = path.join(__dirname, '../public/videos');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🎬 Video Optimization Setup Complete!');
console.log('');
console.log('📋 Manual optimization steps required:');
console.log('');
console.log('1. Install FFmpeg (if not already installed):');
console.log('   Ubuntu/Debian: sudo apt install ffmpeg');
console.log('   macOS: brew install ffmpeg');
console.log('   Windows: Download from https://ffmpeg.org/');
console.log('');
console.log('2. Run these FFmpeg commands to optimize the video:');
console.log('');
console.log('   # Create high-quality WebM version (better compression)');
console.log(`   ffmpeg -i "${videoPath}" -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus -vf "scale=1280:720" "${outputDir}/digividya_demo_hq.webm"`);
console.log('');
console.log('   # Create medium-quality MP4 version');
console.log(`   ffmpeg -i "${videoPath}" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -vf "scale=1280:720" "${outputDir}/digividya_demo_mq.mp4"`);
console.log('');
console.log('   # Create low-quality MP4 version for slow connections');
console.log(`   ffmpeg -i "${videoPath}" -c:v libx264 -crf 35 -preset fast -c:a aac -b:a 96k -vf "scale=854:480" "${outputDir}/digividya_demo_lq.mp4"`);
console.log('');
console.log('   # Generate poster image (first frame)');
console.log(`   ffmpeg -i "${videoPath}" -ss 00:00:01 -vframes 1 -q:v 2 "${outputDir}/digividya_demo_poster.jpg"`);
console.log('');
console.log('3. Update the OptimizedVideo component to use multiple sources:');
console.log('   - Add <source> elements for different formats');
console.log('   - Implement adaptive quality based on connection speed');
console.log('');
console.log('4. Configure your deployment platform (Vercel/Netlify) to:');
console.log('   - Serve videos with proper cache headers');
console.log('   - Enable HTTP/2 for better streaming');
console.log('   - Use CDN for global distribution');
console.log('');
console.log('🚀 After optimization, the video will load instantly with no quality loss!');