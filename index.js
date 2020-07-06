//var express = require('express');
//var path = require('path');
//var app = express();
//var server = require('http').Server(app);
//var io = require('socket.io')(server);
//
//
//const cv = require('opencv4nodejs');
//const vCap = new cv.VideoCapture(0);
//console.log('WebCam connected!');
//app.get("/stream",function(req,res){
//    res.sendFile(path.join(__dirname,'index.html'));
//});
//
//setInterval(function(){
//    const  frame = vCap.read();
//    const rframe = frame.resizeToMax(640,320)
//    const image = cv.imencode('.jpg', rframe).toString('base64');
//    io.emit('image',image);
//},100);
//
//server.listen(3000);
//console.log('WebCam server started!');
 const LiveCam = require('livecam');
 const webcam_server = new LiveCam
 ({
     // address and port of the webcam UI
     'ui_addr' : 'localhost',
     'ui_port' : 11000,

     // address and port of the webcam Socket.IO server
     // this server broadcasts GStreamer's video frames
     // for consumption in browser side.
     'broadcast_addr' : 'localhost',
     'broadcast_port' : 12000,

     // address and port of GStreamer's tcp sink
     'gst_tcp_addr' : '127.0.0.1',
     'gst_tcp_port' : 10000,
  
     // callback function called when server starts
     'start' : function() {
         console.log('WebCam server started!');
     },
  
     // webcam object holds configuration of webcam frames
     'webcam' : {
      
         // should frames be converted to grayscale (default : false)
         'grayscale' : true,
      
         // should width of the frame be resized (default : 0)
         // provide 0 to match webcam input
         'width' : 800,

         // should height of the frame be resized (default : 0)
         // provide 0 to match webcam input
         'height' : 600,
      
         // should a fake source be used instead of an actual webcam
         // suitable for debugging and development (default : false)
         'fake' : false,
      
         // framerate of the feed (default : 0)
         // provide 0 to match webcam input
         'framerate' : 25
     }
 });

 webcam_server.broadcast();
