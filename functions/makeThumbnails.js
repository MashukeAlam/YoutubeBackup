const { exec } = require('child_process');


const makeThumbnails = async (arr) => {


    arr.forEach(async (video, idx) => {        
        await exec(`ffmpeg -i '${video[0]}' -ss 00:00:00.000 -vframes 1 /home/mashuk/YoutubeOff/public/thumbnails/${idx}.jpg`, {cwd: process.env.COLLECTION_DIR}, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log("Error occured running command", err);
                return;
              }
            
              // the *entire* stdout and stderr (buffered)
            //   console.log(`stdout: ${stdout}`);
            //   console.log(`stderr: ${stderr}`);
        });
    });
    

}

module.exports.makeThumbnails = makeThumbnails;