
var audioTrack = WaveSurfer.create({
    container: '.audio',
    waveColor: '#fff',
    progressColor: '#00d5ff',
    barWidth: 1,
    responsive: true,
    barHeight: 60,
    hideScrollbar: true,
});

audioTrack.load('./Audio/ButterFlyEffect.mp3');

const playBtn = document.querySelector(".play-btn")
const playBtn2 = document.querySelector(".play-btn2")

playBtn.addEventListener("click",()=>{
    audioTrack.playPause();

    if (audioTrack.isPlaying()){
        playBtn.classList.add("playing");
        

    }else{
        playBtn.classList.remove("playing");
        
    }
})

audioTrack.setVolume(1.5);

var audioTrack2 = WaveSurfer.create({
    container: '.audio2',
    waveColor: '#fff',
    progressColor: '#00d5ff',
    barWidth: 1,
    responsive: true,
    barHeight: 60,
    hideScrollbar: true,
});

audioTrack2.load('./Audio/HeatWaves.mp3');
playBtn2.addEventListener("click",()=>{
    audioTrack2.playPause();

    if (audioTrack2.isPlaying()){
        playBtn2.classList.add("playing");
        

    }else{
        playBtn2.classList.remove("playing");
        
    }
})

audioTrack2.setVolume(1.5);
