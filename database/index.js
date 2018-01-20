var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  id: String,
  description: String,
  title: String,
  thumbnail: String,
});

var Video = mongoose.model('Videos', itemSchema);

var save = function (videos, callback) {
  videos.map((vid) => {
    var newVideo = new Video({
      id: vid.id.videoId,                      // link for iFrame
      description: vid.snippet.description,
      title: vid.snippet.title,
      thumbnail: vid.snippet.thumbnails.default.url,
    });
    newVideo.save((err, success) => {
      if (err) { console.log('ERROR SAVING') }
      callback();
    });
  });
};

var selectAll = function (callback) {
  Video.find({}, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;