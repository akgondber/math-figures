import figureSet from "figures";
import ansiEscapes from "ansi-escapes";
import { times } from "ramda";
import {
  fiveTimes,
  fourTimes,
  goToRel,
  sixTimes,
  threeTimes,
  twoTimes,
  writeCur,
  writeRel,
} from "./source/utils.js";
import { cls } from "./source/term-helpers.js";

const drawZero = () => {
  writeRel(0, 0, figureSet.lineDownDoubleRightDouble);
  times(() => {
    process.stdout.write(figureSet.lineDouble);
  }, 7);
  times((i) => {
    if (i === 0) {
      writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
    } else {
      writeRel(-1, 1, figureSet.lineVerticalDouble);
    }
  }, 6);
  times((i) => {
    if (i === 0) {
      writeRel(-1, 1, figureSet.lineUpDoubleLeftDouble);
    } else {
      writeRel(-2, 0, figureSet.lineDouble);
    }
  }, 8);
  times((i) => {
    if (i === 0) {
      writeRel(-2, 0, figureSet.lineUpDoubleRightDouble);
    } else {
      writeRel(-1, -1, figureSet.lineVerticalDouble);
    }
  }, 6);
  process.stdout.write(ansiEscapes.cursorMove(8, 5));
  return [5, 7];
};

const drawOne = () => {
  process.stdout.write(ansiEscapes.cursorMove(0, 2));
  process.stdout.write(figureSet.lineSlash);
  process.stdout.write(ansiEscapes.cursorMove(0, -1));
  process.stdout.write(figureSet.lineSlash);
  process.stdout.write(ansiEscapes.cursorMove(0, -1));
  process.stdout.write(figureSet.lineSlash);
  process.stdout.write(figureSet.lineVerticalBold);
  fiveTimes(() => {
    process.stdout.write(ansiEscapes.cursorMove(-1, 1));
    process.stdout.write(figureSet.lineVerticalBold);
  });

  return [4, 6];
};

const drawTwo = () => {
  writeCur(figureSet.lineDownDoubleRightDouble);
  times(() => {
    writeCur(figureSet.lineDouble);
  }, 5);
  writeCur(figureSet.lineDownDoubleLeftDouble);
  threeTimes(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });

  writeRel(-1, 0, figureSet.lineUpDoubleLeftDouble);
  writeRel(-2, 0, figureSet.lineDouble);

  fourTimes((i) => {
    if (i === 0) {
      writeRel(-2, 0, figureSet.lineDouble);
    } else {
      writeRel(-2, 0, figureSet.lineDouble);
    }
  });
  writeRel(-2, 0, figureSet.lineDownDoubleRightDouble);
  threeTimes(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });
  writeRel(-1, 0, figureSet.lineUpDoubleRightDouble);

  fiveTimes((i) => {
    writeRel(0, 0, figureSet.lineDouble);
  });
  writeCur(figureSet.lineUpDoubleLeftDouble);

  return [7, 7];
};

const drawThree = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets;

  offsets = writeRel(0, 0, figureSet.lineDownDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];

  fiveTimes(() => {
    offsets = writeRel(0, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });

  offsets = writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  threeTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });

  times(() => {
    offsets = writeRel(-2, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  }, 5);
  offsets = goToRel(4, 0);
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(0, 0, figureSet.lineUpDoubleDownDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  times(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  }, 2);
  offsets = writeRel(-1, 1, figureSet.lineUpDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  times(() => {
    offsets = writeRel(-2, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  }, 5);
  offsets = writeRel(-2, 0, figureSet.lineUpDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = goToRel(6, 0);
  offsetX += offsets[0];
  offsetY += offsets[1];
  return [offsetX, offsetY];
};

const drawFour = () => {
  threeTimes((i) => {
    if (i === 0) {
      writeRel(0, 0, figureSet.lineVerticalDouble);
    } else {
      writeRel(-1, 1, figureSet.lineVerticalDouble);
    }
  });
  writeRel(-1, 1, figureSet.lineUpDoubleRightDouble);
  times(() => {
    writeRel(0, 0, figureSet.lineDouble);
  }, 4);
  writeRel(0, 0, figureSet.lineUpDoubleDownDoubleLeftDouble);
  writeRel(-1, -1, figureSet.lineVerticalDouble);
  writeRel(-1, -1, figureSet.lineVerticalDouble);
  times((i) => {
    if (i === 0) {
      writeRel(-1, 3, figureSet.lineVerticalDouble);
    } else {
      writeRel(-1, 1, figureSet.lineVerticalDouble);
    }
  }, 3);
  return [6, 8];
};

const drawFive = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets = [];

  times((i) => {
    if (i !== 0) {
      offsets = writeRel(0, 0, figureSet.lineDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(0, 0, figureSet.lineDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  }, 7);
  offsets = writeRel(-7, 0, figureSet.lineDownDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  twoTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-1, 1, figureSet.lineUpDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  fiveTimes(() => {
    offsets = writeRel(0, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  twoTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-1, 1, figureSet.lineUpDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  let backOffsets = -2;
  fiveTimes(() => {
    offsets = writeRel(-2, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-2, 0, figureSet.lineUpDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = goToRel(6, 0);
  offsetX += offsets[0];
  offsetY += offsets[1];
  return [offsetX, offsetY];
};

const drawSix = () => {
  times((i) => {
    if (i !== 0) {
      writeRel(0, 0, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDownDoubleRightDouble);
    }
  }, 7);
  goToRel(-6, 0);
  fiveTimes(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });
  writeRel(-1, 1, figureSet.lineUpDoubleRightDouble);
  fiveTimes(() => {
    writeRel(0, 0, figureSet.lineDouble);
  });
  writeRel(0, 0, figureSet.lineUpDoubleLeftDouble);
  twoTimes(() => {
    writeRel(-1, -1, figureSet.lineVerticalDouble);
  });
  writeRel(-1, -1, figureSet.lineDownDoubleLeftDouble);
  fiveTimes(() => {
    writeRel(-2, 0, figureSet.lineDouble);
  });
  writeRel(-2, 0, figureSet.lineUpDoubleDownDoubleRightDouble);
  goToRel(4, 3);
  return [5, 8];
};

const drawSeven = () => {
  writeRel(0, 0, figureSet.lineVerticalDouble);
  times((i) => {
    if (i === 0) {
      writeRel(-1, -1, figureSet.lineDownDoubleRightDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  }, 7);
  writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
  sixTimes(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });
  return [8, 8];
};

const drawEight = () => {
  sixTimes((i) => {
    if (i === 0) {
      writeRel(0, 0, figureSet.lineDownDoubleRightDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  fourTimes((i) => {
    if (i === 0) {
      writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
    } else {
      writeRel(-1, 1, figureSet.lineVerticalDouble);
    }
  });
  sixTimes((i) => {
    if (i === 0) {
      writeRel(-1, 0, figureSet.lineUpDoubleDownDoubleLeftDouble);
    } else {
      writeRel(-2, 0, figureSet.lineDouble);
    }
  });
  threeTimes((i) => {
    if (i === 0) {
      writeRel(-2, 0, figureSet.lineUpDoubleDownDoubleRightDouble);
    } else {
      writeRel(-1, -1, figureSet.lineVerticalDouble);
    }
  });
  goToRel(0, 2);
  fourTimes((i) => {
    if (i === 3) {
      writeRel(-1, 0, figureSet.lineUpDoubleRightDouble);
    } else {
      writeRel(-1, 1, figureSet.lineVerticalDouble);
    }
  });
  sixTimes((i) => {
    if (i === 5) {
      writeRel(0, 0, figureSet.lineUpDoubleLeftDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  twoTimes((i) => {
    writeRel(-1, -1, figureSet.lineVerticalDouble);
  });
  goToRel(0, 2);
  return [7, 8];
};

const drawNine = () => {
  writeRel(5, 3, figureSet.lineUpDoubleDownDoubleLeftDouble);

  twoTimes((i) => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });
  writeRel(-1, 1, figureSet.lineUpDoubleLeftDouble);
  fiveTimes((i) => {
    writeRel(
      -2,
      0,
      i === 4 ? figureSet.lineUpDoubleRightDouble : figureSet.lineDouble,
    );
  });
  fiveTimes((i) => {
    if (i === 0) {
      writeRel(3, -3, figureSet.lineDouble);
    } else {
      writeRel(
        -2,
        0,
        i === 4 ? figureSet.lineUpDoubleRightDouble : figureSet.lineDouble,
      );
    }
  });
  twoTimes((i) => {
    writeRel(-1, -1, figureSet.lineVerticalDouble);
  });
  sixTimes((i) => {
    if (i === 0) {
      writeRel(-1, -1, figureSet.lineDownDoubleRightDouble);
    } else {
      writeRel(
        0,
        0,
        i === 5 ? figureSet.lineDownDoubleLeftDouble : figureSet.lineDouble,
      );
    }
  });
  twoTimes((i) => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });
  goToRel(0, 4);
  return [6, 8];
};

const drawPlus = () => {
  fourTimes((i) => {
    if (i === 0) {
      writeRel(1, 3, figureSet.lineDouble);
    } else if (i === 3) {
      writeRel(0, 0, figureSet.lineUpDoubleDownDoubleLeftDoubleRightDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  writeRel(-1, -1, figureSet.lineVerticalDouble);
  threeTimes((i) => {
    if (i === 0) {
      writeRel(0, 1, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  writeRel(-4, 1, figureSet.lineVerticalDouble);
  goToRel(3, 0);
  return [9, 10];
};

const drawMinus = () => {
  fourTimes((i) => {
    if (i === 0) {
      writeRel(1, 3, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  return [6, 4];
};

const drawDivide = () => {
  let [offsetX, offsetY] = writeRel(2, 2, figureSet.checkboxOff);
  const currOffset = writeRel(-1, 2, figureSet.checkboxOff);
  offsetX += currOffset[0];
  offsetY += currOffset[1];
  return [offsetX, offsetY];
};

const drawMultiply = () => {
  writeRel(1, 3, figureSet.bullet);
  return [4, 3];
};

const drawEqual = () => {
  let offsetX = 0;
  let offsetY = 0;
  let currOffsets;

  fourTimes((i) => {
    if (i === 0) {
      currOffsets = writeRel(1, 2, figureSet.lineDouble);
      offsetX += currOffsets[0];
      offsetY += currOffsets[1];
    } else {
      currOffsets = writeRel(0, 0, figureSet.lineDouble);
      offsetX += currOffsets[0];
      offsetY += currOffsets[1];
    }
  });
  currOffsets = writeRel(-4, 1, figureSet.lineDouble);
  offsetX += currOffsets[0];
  offsetY += currOffsets[1];

  threeTimes(() => {
    currOffsets = writeRel(0, 0, figureSet.lineDouble);
    offsetX += currOffsets[0];
    offsetY += currOffsets[1];
  });
  return [offsetX, offsetY];
};

const drawDot = () => {
  return writeRel(1, 0, figureSet.squareSmall);
};

export {
  drawZero,
  drawOne,
  drawTwo,
  drawThree,
  drawFour,
  drawFive,
  drawSix,
  drawSeven,
  drawEight,
  drawNine,
  drawPlus,
  drawMinus,
  drawDivide,
  drawMultiply,
  drawEqual,
  drawDot,
  cls,
  cls as clearTerminal,
};
