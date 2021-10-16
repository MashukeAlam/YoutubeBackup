const fs = require('fs');
const path = require('path');

const srcPath = "/mnt/E6EA7EDBEA7EA807/Files/Videos/Movies/Youtube Backup";

function getMasterArr() {
    let masterArray = []

    masterArray = fs.readdirSync(srcPath).map(file => [file, path.join(srcPath, file), fs.statSync(path.join(srcPath, file)).isDirectory(), path.extname(file)])
    return masterArray;
}

module.exports.getArrayOfFiles = getMasterArr;