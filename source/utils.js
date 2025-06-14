import ansiEscapes from "ansi-escapes";
import stringWidth from "string-width";
import * as R from "ramda";

const sevenTimes = R.flip(R.times)(7);
const sixTimes = R.flip(R.times)(6);
const fiveTimes = R.flip(R.times)(5);
const fourTimes = R.flip(R.times)(4);
const threeTimes = R.flip(R.times)(3);
const twoTimes = R.flip(R.times)(2);

const writeRel = (x, y, subject) => {
  process.stdout.write(ansiEscapes.cursorMove(x, y));
  process.stdout.write(subject);

  return [x + stringWidth(subject), y];
};

const writeCur = (subject) => {
  process.stdout.write(subject);
  return [stringWidth(subject), 0];
};

const goToRel = (x, y) => {
  process.stdout.write(ansiEscapes.cursorMove(x, y));
};

export {
  writeRel,
  writeCur,
  goToRel,
  twoTimes,
  threeTimes,
  fourTimes,
  fiveTimes,
  sixTimes,
  sevenTimes,
};
