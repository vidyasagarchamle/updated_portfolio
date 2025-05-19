const fs = require('fs');
const { createCanvas } = require('canvas');

// Define the placeholder images we need to create
const placeholders = [
  { name: 'profile-placeholder.png', width: 400, height: 400 },
  { name: 'project-1-placeholder.png', width: 800, height: 600 },
  { name: 'project-2-placeholder.png', width: 800, height: 600 },
  { name: 'project-3-placeholder.png', width: 800, height: 600 }
];

// Function to create a transparent PNG
function createTransparentPNG(width, height, outputPath) {
  // Create a canvas with the specified dimensions
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // By default, canvas is already transparent, but we can explicitly set it
  ctx.clearRect(0, 0, width, height);
  
  // Add a very light purple border to visualize the image boundaries
  ctx.strokeStyle = 'rgba(100, 50, 200, 0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, width, height);
  
  // Add a small text in the center to identify the image
  ctx.fillStyle = 'rgba(100, 50, 200, 0.5)';
  ctx.font = '14px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${width}x${height}`, width/2, height/2);
  
  // Convert the canvas to a PNG buffer
  const buffer = canvas.toBuffer('image/png');
  
  // Write the buffer to the file
  fs.writeFileSync(outputPath, buffer);
  console.log(`Created ${outputPath} (${width}x${height})`);
}

// Create directory if it doesn't exist
if (!fs.existsSync('./public/images')) {
  fs.mkdirSync('./public/images', { recursive: true });
}

// Generate all the placeholders
placeholders.forEach(placeholder => {
  createTransparentPNG(
    placeholder.width,
    placeholder.height,
    `./public/images/${placeholder.name}`
  );
});

console.log('All placeholder images have been generated!'); 