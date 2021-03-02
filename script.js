"use strict";

window.addEventListener("DOMContentLoaded", fetchSVG);
let elementToPaint;
let colorClicked;

async function fetchSVG() {
  let response = await fetch("show-01.svg");
  let mySVGData = await response.text();
  document.querySelector("section").innerHTML = mySVGData;
  console.log("fetched");
  console.log(mySVGData);
  displaySVG(mySVGData);
}

function displaySVG(mySVGData) {
  document.querySelector("section").innerHTML = mySVGData;
  console.log("inserted in html");
  eventListenersOnParts();
}

function eventListenersOnParts() {
  const shoeParts = document.querySelectorAll(".shoepart");
  shoeParts.forEach((shoePart) => {
    shoePart.addEventListener("click", shoePartClicked);
    shoePart.addEventListener("mouseover", shoePartHover);
    shoePart.addEventListener("mouseout", removeStroke);
  });
}

function shoePartClicked() {
  elementToPaint = this;
  const colors = document.querySelectorAll(".color_btn");
  colors.forEach((color) => {
    color.addEventListener("click", getColor);
    console.log(color);
  });

  function getColor(color) {
    colorClicked = this.getAttribute("fill");
    console.log(colorClicked);
    elementToPaint.style.fill = colorClicked;
  }
}

function shoePartHover() {
  this.style.stroke = "pink";
  this.style.strokeWidth = "7px";
  this.style.strokeDasharray = "5,5";
  console.log("hovers");
}

function removeStroke() {
  this.style.stroke = "transparent";
}
