"use strict";
drawAvatar();

function drawAvatar(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    // set black square (background)
    context.beginPath();
    context.fillStyle = '#010101';
    context.fillRect(10, 10, 300, 300);
    context.beginPath();
    // set color of the avatar
    context.fillStyle = '#66ff00';
    // first square on the left (above)
    context.fillRect(20, 20, 50, 50);
    // first rectangle in the middle
    context.beginPath();
    context.moveTo(60, 60, 300, 300);
    context.fillRect(70, 70, 180, 50);
    // second square on the right (above)
    context.beginPath();
    context.moveTo(50, 50, 300, 300);
    context.fillRect(250, 20, 50, 50);
    // second rectangle under the middle rectangle
    context.beginPath();
    context.moveTo(100, 100, 300, 300);
    context.fillRect(20, 120, 280, 100);
     // first square on the left (under)
     context.beginPath();
     context.moveTo(110, 110, 50, 50);
     context.fillRect(20, 210, 50, 50);
    // second square on the right (under)
    context.beginPath();
    context.moveTo(50, 50, 300, 300);
    context.fillRect(250, 210, 50, 50);

}
