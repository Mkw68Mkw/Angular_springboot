const fs = require('fs-extra');

// Copy both vercel config and the built assets to correct location
fs.copySync('vercel.json', 'dist/client/vercel.json');
fs.copySync('dist/client', '../client/src/main/resources/static');
console.log('Copied files to Spring Boot static resources!');
