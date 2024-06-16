import Luxy from "luxy.js";
import anime from "animejs/lib/anime.es.js";

export default ({ app }) => {
  if (process.client) {
    Luxy.init();

    var textWrapper = document.querySelector(".ml6 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml6 .letter",
        translateY: ["1.1em", 0],
        opacity: [0, 1],
        translateZ: 0,
        duration: 1000,
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: ".ml6",
        opacity: 1,
        duration: 6000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }
};
