function updateTotalTime(){
  const playlist = document.querySelector("#playlist").getElementsByClassName("item");
  const totalTime = document.querySelector("#totalTime");

  const tt = getTotalTime(playlist);
  totalTime.innerText = Math.trunc(tt) + ":" + Math.round((tt - Math.trunc(tt)) * 60).toString().padStart(2, '0');
}

function getTotalTime(playlist){

  let totalTime = 0;
  for(let i=0; i < playlist.length; i++){
    totalTime = totalTime + getDuration(playlist[i]);
  }

  return totalTime;
}

function getDuration(song){
  let timeparts = song.getElementsByClassName("duration")[0].innerText.split(":");
  return parseInt(timeparts[0]) + parseInt(timeparts[1])/60.0;
}
