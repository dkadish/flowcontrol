function clearList(){
  const available = document.querySelector("#available");

  while(getPlaylist().length > 0){
    const firstSong = getPlaylist().item(0);
    available.appendChild(firstSong);
    firstSong.style.backgroundColor = "var(--light)";
  }
}

function getPlaylist(){
  const playlist = document.querySelector("#playlist");

  return playlist.getElementsByClassName("item");
}
