const spawn = require('child_process').spawn
module.exports = createCommand

function createCommand (win, options_) {
  var options = options_ || {}
  var ffmpegPath = options.ffmpeg || 'ffmpeg'
  var fps = options.fps || 60
  return result
}

let buildScript = (input_path, output_path, args) => {
  var ffmpeg = spawn('ffmpeg', args)
  $(function(){
    ffmpeg.stdout.on( 'data', data => {
     console.log( `stdout: ${data}` );
     $('<p>' + data + '</p>').appendTo('.working')
    });
   ffmpeg.stderr.on( 'data', data => {
     console.log( `stderr: ${data}` );
     $('<p>' + data + '</p>').appendTo('.working')
    });
  })
}

$(function(){
  $('#create_gif').on('click', (event) => {
    input_path = document.getElementById('selected-file').innerHTML
    output_path = document.getElementById('selected-file').innerHTML + ".gif"
    starting = document.getElementById('starting').value
    length = document.getElementById('length').value

    var args = [
      '-i', input_path,
      '-r', '10',
      '-vf', 'scale=500:-1',
      '-t', length,
      output_path
    ]
    buildScript(input_path, output_path, args)
  })
})
