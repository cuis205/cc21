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


    var numbers = [1, 2, 3, 4,5,6,7,8,9,10];
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
    
  });

}

document.addEventListener('ended', function (e){
    if($(e.target).is('video')){
         var picker = Math.floor(Math.random() * 9) + 1 ;
      //console.log(picker);
         var newmood = "videos/00" + picker + ".mov";
       $(e.target).attr('src', newmood);
     $(e.target)[0].load();
      //heygirl();

    

    }
}, true);

//function heygirl(){
//var vide = document.getElementsByTagName('video');
//for( var i = 0; i < vide.length; i++ ){ 
//  var brh = [];
  
 //   console.log( vide.item(i).src )
//}};
