var express = require('express');
var router = express.Router();
var {fireServer} = require('../functions/firePythonServer');
const { getArrayOfFiles } = require('../functions/getArrayOfFiles');
const { makeThumbnails } = require('../functions/makeThumbnails');
const { deleteThumbnails } = require('../functions/deleteThumbnails');

router.get('/', async (req, res) => {
  await fireServer();
  const files = getArrayOfFiles();
  for (let i = 0; i < files.length; i++) {
    files[i].push(`${i}.jpg`);
  }
  await deleteThumbnails();
  await makeThumbnails(files);
  await res.render("front", { title: "Youtube",  files });
});



module.exports = router;
