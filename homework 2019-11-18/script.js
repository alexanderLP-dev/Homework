"use strict";

function Figure(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
}

// Figure.prototype.draw = function() {
// }; // Прототипный метод

function Rect(x, y, width, height, color) {
  Figure.call(this, x, y, color);

  this.width = width;
  this.height = height;

  this.draw = function(context) {
    context.beginPath();
    context.rect(x, y, this.width, this.height);
    context.strokeStyle = this.color;
    context.stroke();
  };
}

function Circle(x, y, r, color) {
  Figure.call(this, x, y, color);
  this.r = r;
  this.draw = function(context) {
    context.beginPath();
    context.arc(x, y, this.r, 2 * Math.PI, false);
    context.strokeStyle = this.color;
    context.stroke();
  };
}

function Line(x, y, x2, y2, color) {
  Figure.call(this, x, y, color);

  this.x2 = x2;
  this.y2 = y2;

  this.draw = function(context) {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x2, this.y2);
    context.strokeStyle = this.color;
    context.stroke();
  };
}

function Triangle(x, y, x2, y2, x3, y3, color) {
  Figure.call(this, x, y, color);

  this.x2 = x2;
  this.y2 = y2;

  this.x3 = x3;
  this.y3 = y3;

  this.draw = function(context) {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x3, this.y3);
    context.lineTo(this.x2, this.y2);
    context.lineTo(this.x, this.y);
    context.strokeStyle = this.color;
    context.stroke();
  };
}

function Canvas(height, width, id) {
  var canvas = document.querySelector(id);
  var context = canvas.getContext("2d"); //ctx

  canvas.width = width;
  canvas.height = height;

  this.add = function() {
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].draw(context);
    }
  };
}

var drawArea = document.getElementById("canvasID");
var context = drawArea.getContext("2d");

var drawArea = new Canvas(350, 400, "#canvasID");
var circle = new Circle(120, 120, 50, "green");
var rect = new Rect(260, 130, 60, 120, "blue");
var line = new Line(50, 250, 200, 200, "red");
var triangle = new Triangle(200, 50, 250, 50, 200, 150, "orange");

console.log(drawArea);
console.log(circle);
console.log(line);
console.log(rect);

drawArea.add(circle, line, rect, triangle);
