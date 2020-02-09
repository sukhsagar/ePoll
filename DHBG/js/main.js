var startVoting = function(){
    localStorage.setItem('voteCount',0);
    localStorage.setItem('candidate1votes',JSON.stringify([]));
    localStorage.setItem('candidate2votes',JSON.stringify([]));
    localStorage.setItem('candidate3votes',JSON.stringify([]));
    localStorage.setItem('candidate4votes',JSON.stringify([]));
    initialize();
}

const Url='http://localhost:3000/';
const Url2='http://localhost:4000/';
let candidate1selected=false;
let candidate2selected=false;
let candidate3selected=false;
let candidate4selected=false;
let voteCount = localStorage.getItem('voteCount');
if(voteCount===undefined || voteCount==null){
    voteCount=0;
    localStorage.setItem('voteCount',0);
}
else{
    voteCount=localStorage.getItem('voteCount');
}
let candidate1votes=localStorage.getItem('candidate1votes');
if(candidate1votes===undefined || candidate1votes==null){
    candidate1votes=[];
    localStorage.setItem('candidate1votes',JSON.stringify(candidate1votes));
}
else{
    candidate1votes=localStorage.getItem('candidate1votes');
}
let candidate2votes=localStorage.getItem('candidate2votes');
if(candidate2votes===undefined || candidate2votes==null){
    candidate2votes=[];
    localStorage.setItem('candidate2votes',JSON.stringify(candidate2votes));
}
else{
    candidate2votes=localStorage.getItem('candidate2votes');
}
let candidate3votes=localStorage.getItem('candidate3votes');
if(candidate3votes===undefined || candidate3votes==null){
    candidate3votes=[];
    localStorage.setItem('candidate3votes',JSON.stringify(candidate3votes));
}
else{
    candidate3votes=localStorage.getItem('candidate3votes');
}
let candidate4votes=localStorage.getItem('candidate4votes');
if(candidate4votes===undefined || candidate4votes==null){
    candidate4votes=[];
    localStorage.setItem('candidate1votes',JSON.stringify(candidate4votes));
}
else{
    candidate4votes=localStorage.getItem('candidate4votes');
}
var initialize = function(){
    candidate1selected=false;
    candidate2selected=false;
    candidate3selected=false;
    candidate4selected=false;
    voteCount = localStorage.getItem('voteCount');
    if(voteCount===undefined || voteCount==null){
        voteCount=0;
        localStorage.setItem('voteCount',0);
    }
    else{
        voteCount=localStorage.getItem('voteCount');
    }
    candidate1votes=localStorage.getItem('candidate1votes');
    if(candidate1votes===undefined || candidate1votes==null){
        candidate1votes=[];
        localStorage.setItem('candidate1votes',JSON.stringify(candidate1votes));
    }
    else{
        candidate1votes=localStorage.getItem('candidate1votes');
    }
    candidate2votes=localStorage.getItem('candidate2votes');
    if(candidate2votes===undefined || candidate2votes==null){
        candidate2votes=[];
        localStorage.setItem('candidate1votes',JSON.stringify(candidate2votes));
    }
    else{
        candidate1votes=localStorage.getItem('candidate2votes');
    }
    candidate3votes=localStorage.getItem('candidate3votes');
    if(candidate3votes===undefined || candidate3votes==null){
        candidate3votes=[];
        localStorage.setItem('candidate3votes',JSON.stringify(candidate3votes));
    }
    else{
        candidate3votes=localStorage.getItem('candidate3votes');
    }
    candidate4votes=localStorage.getItem('candidate4votes');
    if(candidate4votes===undefined || candidate4votes==null){
        candidate4votes=[];
        localStorage.setItem('candidate4votes',JSON.stringify(candidate4votes));
    }
    else{
        candidate4votes=localStorage.getItem('candidate4votes');
    }
    candidateSelected();
    validateVoteButton();
}


var voteForCandidate1 = function(){
    var voterNo = updatedVoterCount();
    candidate1votes=JSON.parse(localStorage.getItem('candidate1votes'));
    candidate1votes.push("voterNo_"+voterNo+"_"+new Date());
    localStorage.setItem('candidate1votes',JSON.stringify(candidate1votes));
    
}

var candidateSelected = function(){
    if(candidate1selected===true){
        var element = document.getElementById("candidate-1");
        element.classList.add("selected");
        element.classList.remove("notSelected");
        element = document.getElementById("candidate-2");
        element.classList.add("notSelected");
        element.classList.remove("selected");
    }
    if(candidate2selected===true){
        var element = document.getElementById("candidate-2");
        element.classList.add("selected");
        element.classList.remove("notSelected");
        element = document.getElementById("candidate-1");
        element.classList.add("notSelected");
        element.classList.remove("selected");
    }
    if(candidate3selected===true){
        var element = document.getElementById("candidate-3");
        element.classList.add("selected");
        element.classList.remove("notSelected");
        element = document.getElementById("candidate-4");
        element.classList.add("notSelected");
        element.classList.remove("selected");
    }
    if(candidate4selected===true){
        var element = document.getElementById("candidate-4");
        element.classList.add("selected");
        element.classList.remove("notSelected");
        element = document.getElementById("candidate-3");
        element.classList.add("notSelected");
        element.classList.remove("selected");
    }
    if(candidate1selected===false && candidate2selected===false && candidate3selected===false && candidate4selected===false){
        var element = document.getElementById("candidate-1");
        element.classList.remove("selected");
        element.classList.remove("notSelected");
        element = document.getElementById("candidate-2");
        element.classList.remove("selected");
        element.classList.remove("notSelected");
        element = document.getElementById("candidate-3");
        element.classList.remove("selected");
        element.classList.remove("notSelected");
        element = document.getElementById("candidate-4");
        element.classList.remove("selected");
        element.classList.remove("notSelected");   
    }
}

candidateSelected();

var selected1 = function(){
    candidate1selected=true;
    candidate2selected=false;
    candidateSelected();
    validateVoteButton();
}

var selected2 = function(){
    candidate2selected=true;
    candidate1selected=false;
    candidateSelected();
    validateVoteButton();
}

var selected3 = function(){
    candidate3selected=true;
    candidate4selected=false;
    candidateSelected();
    validateVoteButton();
}

var selected4 = function(){
    candidate4selected=true;
    candidate3selected=false;
    candidateSelected();
    validateVoteButton();
}

var validateVoteButton = function(){
    if((candidate1selected===true || candidate2selected===true) && (candidate3selected===true || candidate4selected===true)){
        var element = document.getElementById('vote-button');
        element.disabled = false;
        element = document.getElementById('vote-button-image');
        element.classList.add("vote-button-selected");
        element.classList.remove("vote-button");
    }
    else{
        var element = document.getElementById('vote-button')
        element.disabled = true;
        element = document.getElementById('vote-button-image');
        element.classList.remove("vote-button-selected");
        element.classList.add("vote-button");
    }
}

validateVoteButton();

let candidateVoteCount = 0;
var voteNow = function(){
    if((candidate1selected===true || candidate2selected===true) && (candidate3selected===true || candidate4selected===true)){
        if(!((candidate1selected===true && candidate2selected===true) || (candidate3selected===true && candidate4selected===true))){
            var voterNo = updatedVoterCount();
            if(candidate1selected===true){
                candidate1votes=JSON.parse(localStorage.getItem('candidate1votes'));
                candidate1votes.push("voterNo_"+voterNo+"_"+new Date());
                localStorage.setItem('candidate1votes',JSON.stringify(candidate1votes));
                playSound();
                mask();
                postData(Url+'candidate1', {candidate1votes})
                .then(data => console.log(JSON.stringify(data))).then(voteNowForSecondCadidate(voterNo)) // JSON-string from `response.json()` call
                .catch(error => console.error(error));
            }
            else if(candidate2selected===true){
                candidate2votes=JSON.parse(localStorage.getItem('candidate2votes'));
                candidate2votes.push("voterNo_"+voterNo+"_"+new Date());
                localStorage.setItem('candidate2votes',JSON.stringify(candidate2votes));
                playSound();
                mask();
                postData(Url+'candidate2', {candidate2votes})
                .then(data => console.log(JSON.stringify(data))).then(voteNowForSecondCadidate(voterNo)) // JSON-string from `response.json()` call
                .catch(error => console.error(error));
            }
        }
    }
}

var voteNowForSecondCadidate = function(voterNo){
    if((candidate1selected===true || candidate2selected===true) && (candidate3selected===true || candidate4selected===true)){
        if(!((candidate1selected===true && candidate2selected===true) || (candidate3selected===true && candidate4selected===true))){
            if(candidate3selected===true){
                candidate3votes=JSON.parse(localStorage.getItem('candidate3votes'));
                candidate3votes.push("voterNo_"+voterNo+"_"+new Date());
                localStorage.setItem('candidate3votes',JSON.stringify(candidate3votes));
                playSound();
                mask();
                postDataForSecondCandidate(Url2+'candidate3', {candidate3votes})
                .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
                .catch(error => console.error(error));
            }
            else if(candidate4selected===true){
                candidate4votes=JSON.parse(localStorage.getItem('candidate4votes'));
                candidate4votes.push("voterNo_"+voterNo+"_"+new Date());
                localStorage.setItem('candidate4votes',JSON.stringify(candidate4votes));
                playSound();
                mask();
                postDataForSecondCandidate(Url2+'candidate4', {candidate4votes})
                .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
                .catch(error => console.error(error));
            }
            initialize();
            alert("Thank you for casting your vote.");
        }
    }
}


var updatedVoterCount = function(){
    voteCount=parseInt(localStorage.getItem('voteCount'));
    voteCount=voteCount+1;
    localStorage.setItem('voteCount',voteCount);
    return voteCount;
}

var mask = function(){
    document.getElementById("doc_body").classList.add("mask");
    setTimeout(unMask, 5000);
}

var unMask = function(){
    document.getElementById("doc_body").classList.remove("mask");
}

function postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native Javascript objects 
  }
  function postDataForSecondCandidate(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native Javascript objects 
  }

var playSound = function() {
    var snd = new Audio("sound/success.mp3"); // buffers automatically when created
    snd.play();
}