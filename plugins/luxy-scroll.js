import Luxy from "luxy.js";

export default ({ app }) => {
  if (process.client) {
    Luxy.init();
  }
};
