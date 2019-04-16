const Url='http://localhost:3000/';
let candidate1selected=false;
let candidate2selected=false;
let candidate3selected=false;
let candidate4selected=false;
let voteCount = localStorage.getItem('voteCount');
if(voteCount===undefined || voteCount==null){
    voteCount=0;
    localStorage.setItem('voteCount',1);
}
else{
    voteCount=localStorage.getItem('voteCount');
}

var voteForCandidate1 = function(){
    voteCount=parseInt(localStorage.getItem('voteCount'));
    voteCount=voteCount+1;
    localStorage.setItem('voteCount',voteCount);
    // $http.post(Url+'/votes/candidate1', JSON.stringify(new Date()));
    var date = JSON.stringify(new Date());
    postData(Url+'candidate1', {voteCount:{"voted":voteCount,"date":date}})
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
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