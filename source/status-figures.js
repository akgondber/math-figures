import ansiEscapes from "ansi-escapes";
import chalk from "chalk";
import figureSet from "figures";
import { writeRel } from "./utils.js";

const drawSuccess = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets = [];

  offsets = writeRel(0, 0, ansiEscapes.cursorSavePosition);
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(1, 3, chalk.green(figureSet.lineBackslash));
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(0, 0, chalk.green(figureSet.lineSlash));
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(0, -1, chalk.green(figureSet.lineSlash));
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(0, 0, ansiEscapes.cursorRestorePosition);
  offsetX += offsets[0];
  offsetY += offsets[1];
  return [offsetX, offsetY];
};

const drawError = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets = [];

  offsets = writeRel(1, 3, chalk.red(figureSet.lineSlash));
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(0, -1, chalk.red(figureSet.lineSlash));
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(-2, 0, chalk.red(figureSet.lineBackslash));
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(0, 1, chalk.red(figureSet.lineBackslash));
  offsetX += offsets[0];
  offsetY += offsets[1];

  return [offsetX, offsetY];
};

export { drawError, drawSuccess };
