chrome.tabs.executeScript(null,{code:"beginGlitch();"});

function randomNum(hi){
    return Math.floor(Math.random()*hi);
} 
function randomChar(){
    return String.fromCharCode(randomNum(100));
}

function tickPopup() 
{
    requestAnimationFrame(tickPopup);

    var elem = $("#content");
    var text = elem.text();
    var numChars = text.length;

    var i = Math.floor(Math.random() * (numChars-2));
    var left = text.substring(0, i);
    var right = text.substring(i+1, numChars);
    text = left + randomChar() + right;

    elem.text(text);
}

$( document ).ready(function() {
    tickPopup();
});