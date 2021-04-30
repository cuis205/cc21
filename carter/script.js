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

    console.log(vids);

    var tiles = vids[i];
    var video = document.createElement("VIDEO");
    video.setAttribute("src", `${tiles.Video}`);
    video.setAttribute("class", "sizing");
    video.setAttribute("autoplay", "autoplay");
    video.setAttribute("loop", "loop");
    row.appendChild(video);

    video.onclick = function(){
    var rand = Math.floor(Math.random() * 6) + 1 ;
    video.src = "videos/00" + rand + ".mov";
    console.log(video.src);


  };

  });
}



console.log(`⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣤⣄⣀⠀⠀⠀⠀⢀⣠⣤⡤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀
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
⠀⠀⠀⠀⢸⣿⣿⣷⣶⣾⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⣰⣷⣦⠀⠀⠀⠀⠀hello⠀⠀⠀`);
