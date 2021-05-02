function buildPage(DATA) {
  vids = DATA.sort(function(a, b) {
    var colourA = a.Order.toUpperCase();
    var colourB = b.Order.toUpperCase();
    if (colourA < colourB) {
      return -1;
    }
    if (colourA > colourB) {
      return 1;
    }


    return 0;
  });

  var row;

  Array.from(vids).forEach((objects, i) => {
     if (i < 2) {
      row = document.querySelector(".rowone");
    } else if (i < 4) {
      row = document.querySelector(".rowtwo");
    } else if (i < 6){
    return true;}


    //console.log(vids);

    var tiles = vids[i];
    var video = document.createElement("VIDEO");
    video.setAttribute("src", `${tiles.Video}`);
    video.setAttribute("class", "sizing");
    video.setAttribute("id",`${tiles.Order}`);
    video.setAttribute("autoplay", "autoplay");
    //video.setAttribute("loop", "loop");
    row.appendChild(video);


    var numbers = [1, 2, 3, 4,5,6,7,8,9];
    function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


    video.onclick = function(){
         var random = shuffle(numbers);
    //console.log(random[0]);

    video.src = "videos/00" + random[0] + ".mov";
      
    //console.log(video.src);
//heygirl();

    };
    
    video.ondblclick = function(){
      video.pause();
      
    };
    
    
  });

}

document.addEventListener('ended', function (e){
    if($(e.target).is('video')){
         $(e.target).fadeOut(50);
       var time = Math.floor(Math.random() * 6) + 2;
    setTimeout(function(){  
     
      var picker = Math.floor(Math.random() * 9) + 1 ;
      //console.log(picker);
         var newmood = "videos/00" + picker + ".mov";
       $(e.target).attr('src', newmood);
       $(e.target)[0].load();
  
     $(e.target).fadeIn(50);
      //heygirl();
    }, time*1000);
    
    }

}, true);

//function heygirl(){
//var vide = document.getElementsByTagName('video');
//for( var i = 0; i < vide.length; i++ ){ 
//  var brh = [];
  
 //   console.log( vide.item(i).src )
//}};

console.log(`⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣤⣄⣀⠀⠀⠀⠀⢀⣠⣤⡤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⠖⠉⠀⢀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⣠⣾⣿⣿⣿⡿⠿⢿⣶⣤⡀⠀⠀⠀
⠀⣰⣿⣿⣿⠟⠛⠛⠛⠻⠿⠿⢿⠇⠀⢰⣿⣿⣍⣀⣤⣤⣴⣾⣿⣿⣿⡄⠀⠀
⣾⣿⣿⣿⣄⣠⣤⣤⣤⣤⣤⣀⡄⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⣿⣿⣿⡿⠋⠁⠀⠈⠉⠉⢁⣄⠀⠀⠀⢿⣿⣿⣿⣿⡟⠀⠀⢸⣿⣿⣿⣿⠀⠀
⣿⣿⣿⣦⣤⣤⣄⣀⣀⣠⣼⠁⠀⠀⠀⠘⣿⣿⣿⣿⣷⣤⣤⣾⣿⣿⣿⡿⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⡄⠀⠘⠿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣡⣦⣶⣄⠀⠈⠉⠛⠛⠻⠛⠋⠁⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡻⣻⣿⣿⣿⣶⣤⣄⣀⣤⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣦⣀⠀⠉⠉⠉⠉⠉⠉⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠀⠀⠀⠀⠀⣀⡀
⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⠄⢀⣴⣾⣿⣿⣷
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠏⠀⣾⣿⣿⣿⣿⣿
⠈⠉⠉⠛⢻⣿⡉⠙⠿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠟⠛⠉⠀⠀⠀⠙⠿⣿⣿⠿⠋
⠀⠀⠀⠀⢸⣿⣿⣷⣶⣾⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⣰⣷⣦⠀⠀⠀⠀ i see u`);



  
 // setTimeout(function() {
  //   console.log("hi");

  //  }, 1400);





function popUp(){
  $('#infopop').fadeIn(50);
  
 var text = [
   " we still getting din?^1000\n ... \n^1500<div class='gor'>yeah sure </div> \n^1500<div class='con'> cool</div>"
 ];


  
$(function () {
  $(".con").typed({
    strings: text,
    stringsElement: null,
    typeSpeed: 30,
    smartBackspace: false,
    startDelay: 70,
     showCursor: false,
    //cursorChar: "|",
   // preStringTyped: function() {

  //  },
    
    
    callback: function() {
      console.log(text); 
      // $( "div" ).first().css( "color", "grey" );
      //   $( "div" ).last().css( "color", "black" );
       // $('.con').append('<span class="gor"></span>'); 
       //  setInterval(gordon, 3000);
    }
    
    
    
  });
});
  
  
  $("#infopop").draggable({
    start: function() {
      $(this).css({
        transform: "none",
        top: $(this).offset().top + "px",
        left: $(this).offset().left + "px"
      });
    }
  });
} 

window.onload = function(){
var btn = document.getElementById('close-button');
 btn.onclick = function(event) {
  $('#infopop').css("display","none");
};
};


// function gordon(){
//  $(function() {
//   $(".gor").typed({
//     strings: ["yuh"],
//    stringsElement: null,
//    typeSpeed: 30,
//    smartBackspace: true,
//    startDelay: 170,
//    showCursor: false,
//    smartBackspace: false
//   //cursorChar: "|"
   
// //callback: function() {
//  //     console.log(text); 
// //        $('.con').append('<span class="gor"></span>');
//    //     gordon();
//   //  }
    
    
    
//  });
// });
// }


