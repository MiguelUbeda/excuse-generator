/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

function generator(myArr) {
    return myArr[Math.floor(Math.random() * myArr.length)];
  }
  function excuser() {
    return (
      generator(who) +
      " " +
      generator(action) +
      " " +
      generator(what) +
      " " +
      generator(when)
    );
  }

window.onload = function() {
  const text = document.getElementById("excuse");
  text.innerHTML = excuser();
};
