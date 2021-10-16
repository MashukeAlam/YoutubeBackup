const { exec } = require('child_process');
const { cwd } = require('process');

const fireServer = async () => {

    await exec(`python3 -m http.server ${process.env.PYTHON_SERVER_PORT}`, {cwd: process.env.COLLECTION_DIR}, (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log("Error occured running command", err);
            return;
          }
        
          // the *entire* stdout and stderr (buffered)
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
    });

}

module.exports.fireServer = fireServer;