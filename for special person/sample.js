// selecting the requirements
var text1 = document.querySelector(".text1")
var text2 = document.querySelector(".text2")
var text3 = document.querySelector(".text3")
var speedbtn = document.querySelector(".speed")
var mssge = "i hope its you "
var mssge2 = "i waited so long to say this"
var mssge3 = "i love you ❤️"
var speed = 95

// this is the recursive function 
setTimeout(() => {
    
    var voices = window.speechSynthesis.getVoices()
    console.log(voices)
    var utterance = new SpeechSynthesisUtterance(mssge);
    utterance.voice = voices[0];
    utterance.lang = voices[0].lang;
    window.speechSynthesis.speak(utterance);
    function one(text, mssgemain, i = 0) {
        text.textContent += mssgemain[i]
        text.style.animation = "letter 4s linear forwards"
        if (i === mssge.length - 1) { return; }

        setTimeout(() =>
            one(text1, mssge, i + 1)
            , speed)
    }
    one(text1, mssge,)
}, 900)

setTimeout(() => {
 
    var voices = window.speechSynthesis.getVoices()
    var utterance = new SpeechSynthesisUtterance(mssge2);
    utterance.voice = voices[0];
    utterance.lang = voices[0].lang;
    window.speechSynthesis.speak(utterance);
    text1.textContent = ""
    function two(text2, mssgemain, i = 0) {
        text2.textContent += mssgemain[i]
        text2.style.animation = "letter 4s linear forwards"

        if (i === mssge2.length - 1) { return; }

        setTimeout(() =>
            two(text2, mssge2, i + 1)
            , speed)
    }
    two(text2, mssge2,)
}, 4000)

setTimeout(() => {
  
    var voices = window.speechSynthesis.getVoices()
    var utterance = new SpeechSynthesisUtterance(mssge3);
    utterance.voice = voices[0];
    utterance.lang = voices[4].lang;
    window.speechSynthesis.speak(utterance);
    text1.textContent = ""
    text2.textContent = ""
    function three(text3, mssgemain, i = 0) {
        text3.textContent += mssgemain[i]

        text3.style.animation = "letter 8s linear forwards"

        if (i === mssge3.length - 1) { return; }

        setTimeout(() =>
            three(text2, mssge3, i + 1)
            , 70)
    }
    three(text2, mssge3,)
}, 8000)

const voices = speechSynthesis.getVoices();
const desiredVoice = voices[0]; // Choose the voice you want


// "click",()=>{

