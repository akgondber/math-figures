import ansiEscapes from "ansi-escapes";
import { writeCur } from "./utils.js";

const cls = () => {
  writeCur(ansiEscapes.clearTerminal);
};

export { cls };
