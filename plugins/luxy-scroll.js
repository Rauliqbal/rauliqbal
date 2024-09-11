import Luxy from "luxy.js";
import anime from "animejs/lib/anime.es.js";

export default ({ app }) => {
  if (process.client) {
    Luxy.init();
  }
};
