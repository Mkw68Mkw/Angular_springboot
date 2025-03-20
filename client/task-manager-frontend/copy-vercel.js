const fs = require('fs-extra');

fs.copySync('vercel.json', 'dist/task-manager-frontend/vercel.json');
console.log('Copied vercel.json to build directory!');
