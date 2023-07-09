console.log("Welcome to Spotify");
let songindex=0;
let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay')
let Myprogressbar=document.getElementById('Myprogressbar');
let gif= document.getElementById('gif');
let mastersongname= document.getElementById('mastersongname');
let songsItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {SongName: "Something Just Like This", filepath: "songs/1.mp3", coverpath: "covers/1.png"},
    {SongName: "The Scientist", filepath: "songs/2.mp3", coverpath: "covers/2.png"},
    {SongName: "Viva La Vida", filepath: "songs/3.mp3", coverpath: "covers/3.png"},
    {SongName: "My Universe", filepath: "songs/4.mp3", coverpath: "covers/4.png"},
    {SongName: "Yellow", filepath: "songs/5.mp3", coverpath: "covers/5.png"},
    {SongName: "A Sky Full of Stars", filepath: "songs/6.mp3", coverpath: "covers/6.png"},
    
    
      
]
songsItems.forEach((element, i)=>{
      
     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
     element.getElementsByClassName("songName")[0].innertext=songs[i].coverpath;
})
    

//handle play/pause/click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    

    }
    else{
        audioelement.pause()
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioelement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
 //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress);
    Myprogressbar.value=progress;
})
Myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime=Myprogressbar.value * audioelement.duration/100;

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
       
        mastersongname.innerText= songs[songindex].SongName;
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src= `songs/${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })


})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=6){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    audioelement.src= `songs/${songindex}.mp3`;
    mastersongname.innerText= songs[songindex].SongName;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');


})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioelement.src= `songs/${songindex}.mp3`;
    mastersongname.innerText= songs[songindex].SongName;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');


})
