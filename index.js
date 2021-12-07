const change = document.getElementById('change')
const Name = document.getElementById('name')
const Image = document.getElementById('image')
const Audio = document.getElementById('Audio')

const imgSrc = ["jinglebells.jpg","silentNight.jpg","wewishyou.jpg","alliwant.jpg"]
const audioSrc = ["jingle bells.mp3","silent night.mp3","We wish you.mp3","All I Want for Christmas.mp3"]
const songName =["Jingle Bells", "Silent Night", "We wish you!", "All I want for christmas"]


let count =1

change.addEventListener('click', function(){
    if(count == imgSrc.length)
    {
        count=0
        renderNew(count)
    }
    else renderNew(count)
    count++
}
)

function renderNew(count){
    Name.textContent=`${songName[count]}`
    Image.src=`${imgSrc[count]}`
    Audio.src=`${audioSrc[count]}`  
    Audio.play()
    console.log(count) 
}

