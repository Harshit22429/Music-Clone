let songindex=0;
let masterPlay=document.getElementById('masterPlay')
let audioElement = new Audio('songs/1.mp3');
let myProgressBar=document.getElementById('myprogressbar')
let gif=document.getElementById('gif')
let songitems=Array.from(document.getElementsByClassName('songitem'));
let mastersongName=document.getElementById('mastersongName')
let songs=[
    {songName:'Bebaakee_Intehaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName:'Desires_Ap', filePath:'songs/2.mp3', coverPath:'covers/2.jpg'},
    {songName:'Galliyaan_Bebaakee', filePath:'songs/3.mp3', coverPath:'covers/3.jpg'},
    {songName:'King_Tu_Aake_Dekh', filePath:'songs/4.mp3', coverPath:'covers/4.jpg'},
    {songName:'Neele_Neele_Ambar_par', filePath:'songs/5.mp3', coverPath:'covers/5.jpg'},
    {songName:'Roke_na_ruke', filePath:'songs/6.mp3', coverPath:'covers/6.jpg'},
    {songName:'Siddat_title_Track', filePath:'songs/7.mp3', coverPath:'covers/7.jpg'},
    {songName:'Yaara_Mamta_Sharma', filePath:'songs/8.mp3', coverPath:'covers/8.jpg'},
    {songName:'Ye_jo_Jhumta_Sawan_hai', filePath:'songs/9.mp3', coverPath:'covers/9.jpg'}
]

songitems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

    
});
//audio 
//handle play/pause music 
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value* audioElement.duration/100;
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach(element=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })
}
Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songindex+1}.mp3`;
        mastersongName.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=9){
        songindex=0
    }
    else{
        songindex+=1
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongName.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songindex<=0){
        songindex=9
    }
    else{
        songindex-=1
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongName.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})