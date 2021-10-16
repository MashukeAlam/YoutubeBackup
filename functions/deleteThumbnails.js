const { exec } = require('child_process');


const deleteThumbnails = async (arr) => {

     
        await exec(`rm -r /home/mashuk/YoutubeOff/public/thumbnails`, {cwd: process.env.COLLECTION_DIR}, (err, stdout, stderr) => {
            // console.log(idx);
            if (err) {
                // node couldn't execute the command
                console.log("Error occured running command", err);
                return;
              }
            
              // the *entire* stdout and stderr (buffered)
              console.log(`stdout: ${stdout}`);
              console.log(`stderr: ${stderr}`);
        });

        await exec('mkdir thumbnails', {cwd: '/home/mashuk/YoutubeOff/public'}, (err, stdout, stderr) => {
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

module.exports.deleteThumbnails = deleteThumbnails;