// Your code goes here

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");
    let temp = document.getElementById('text');
    temp.textContent = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);