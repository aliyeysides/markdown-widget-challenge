// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){

  $('#source').bind('keyup', function(event) {
    var source = $('#source').val();
    var isItalic = false;
    var new_source = [];
    split_source = source.split("");

    for (letter in split_source){
      if (split_source[letter] == '*' && isItalic==false){
          isItalic = true;
          new_source.push('<i>')
      } else if (split_source[letter]=='*' && isItalic==true){
          isItalic = false;
          new_source.push('</i>');

      } else {
          new_source.push(split_source[letter])
      }
    }
    console.log(new_source.join(''))
    $('#preview').html(new_source.join(''))

    function italic(source){

      if (isItalic == false){
        source = source.replace("*", "<i>")
        isItalic = true
        $('#preview').html(source)
      }
      else
        source = source.replace("*", "</i>")
        isItalic = false
        $('#preview').html(source)
    }



    // var style = null;
    // for (letter in split_source){
    //   if (split_source[letter] == '*' || split_source[letter] == '_'){
    //     style = 'italic'
    //   }

      // if(split_source[letter+1] =='*' || split_source[letter+1] =='_'{
      //   style = 2
      // }
    // }

    // $('#preview').html(source)
  })
})
