function buildPage(DATA) {
  vids = DATA.sort(function(a, b) {
    var colourA = a.Order.toUpperCase(); // ignore upper and lowercase
    var colourB = b.Order.toUpperCase(); // ignore upper and lowercase
    if (colourA < colourB) {
      return -1;
    }
    if (colourA > colourB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  var row;
  // for (var i=0; i<films.length; i++){
  //function scope
  Array.from(vids).forEach((objects, i) => {
    if (i < 2) {
      row = document.querySelector(".rowone");
    } else if (i < 4) {
      row = document.querySelector(".rowtwo");
    } else if (i < 6){
    return true;}

    console.log(vids);

    //var el = document.createElement('div');
    var tiles = vids[i];
    var video = document.createElement("VIDEO");
    video.setAttribute("src", `${tiles.Video}`); // The image source from JSON array.
    //el.appendChild(video);
    video.setAttribute("class", "sizing");
    //video.setAttribute("controls", "controls");
    video.setAttribute("autoplay", "autoplay");
    video.setAttribute("loop", "loop");
    row.appendChild(video);

    //el.addEventListener("click", function() {
    //popUp(objects);
  });
}
