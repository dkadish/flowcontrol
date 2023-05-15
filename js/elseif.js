const songs = document.querySelectorAll(".item");

songs.forEach(song => {
  song.addEventListener("dragend", checkRadio);
})

function checkRadio(event){
  if(document.getElementById("playlist").contains(event.target)){
    const song = event.target;
    const duration = song.getElementsByClassName("duration")[0].innerText;
    const minutes = duration.split(":")[0];

    // Songs on the radio have to be less than 4 minutes
    if(minutes < 4){
      // This song can be on the radio! Make it green.
      song.style.backgroundColor = "yellowgreen";
    } else if (minutes < 5) {
      // This song can sort of be on the radio! Make it orange.
      song.style.backgroundColor = "orange";
    } else {
      // This song cannot be on the radio! Make it red.
      song.style.backgroundColor = "crimson";
    }

  } else {
    event.target.style.backgroundColor = "var(--light)";
  }
}
