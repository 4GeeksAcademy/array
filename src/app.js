/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let domains = [];
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let dominio = `${p}${a}${n}.com`;
        domains.push(dominio);
      }
    }
  }

  console.log(domains);
  console.log("Hello Rigo from the console!");
};
