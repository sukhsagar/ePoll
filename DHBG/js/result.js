var result = function(){
    
var a = []; fetch('http://127.0.0.1:1000/candidate1')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  d = (myJson);
  console.log("CAPTAIN candidate 1 = " + (d.candidate1votes.length)); 
});
fetch('http://127.0.0.1:1000/candidate2')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  d = (myJson);
  console.log("CAPTAIN candidate 2 = " + (d.candidate2votes.length)); 
});
fetch('http://127.0.0.1:2000/candidate3')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  d = (myJson);
  console.log("CAPTAIN candidate 3 = " + (d.candidate3votes.length)); 
});
fetch('http://127.0.0.1:2000/candidate4')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  d = (myJson);
  console.log("CAPTAIN candidate 4 = " + (d.candidate4votes.length)); 
});
var a = []; fetch('http://127.0.0.1:3000/candidate1')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  d = (myJson);
  console.log("VC candidate 1 = " + (d.candidate1votes.length)); 
});
fetch('http://127.0.0.1:3000/candidate2')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  d = (myJson);
  console.log("VC candidate 2 = " + (d.candidate2votes.length)); 
});
fetch('http://127.0.0.1:4000/candidate3')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  d = (myJson);
  console.log("VC candidate 3 = " + (d.candidate3votes.length)); 
});
fetch('http://127.0.0.1:4000/candidate4')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  d = (myJson);
  console.log("VC candidate 4 = " + (d.candidate4votes.length)); 
});
}