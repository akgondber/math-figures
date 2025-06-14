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
  writeRel(0, 0, figureSet.lineDownDoubleRightDouble);

  fiveTimes(() => {
    writeRel(0, 0, figureSet.lineDouble);
  });

  writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
  threeTimes(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });

  times(() => {
    writeRel(-2, 0, figureSet.lineDouble);
  }, 5);
  goToRel(4, 0);
  writeRel(0, 0, figureSet.lineUpDoubleDownDoubleLeftDouble);

  times(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  }, 2);
  writeRel(-1, 1, figureSet.lineUpDoubleLeftDouble);
  times(() => {
    writeRel(-2, 0, figureSet.lineDouble);
  }, 5);
  writeRel(-2, 0, figureSet.lineUpDoubleRightDouble);
  goToRel(6, 0);
  return [7, 8];
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
  times((i) => {
    if (i !== 0) {
      writeRel(0, 0, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  }, 7);
  writeRel(-7, 0, figureSet.lineDownDoubleRightDouble);
  twoTimes(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });
  writeRel(-1, 1, figureSet.lineUpDoubleRightDouble);
  fiveTimes(() => {
    writeRel(0, 0, figureSet.lineDouble);
  });
  writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
  twoTimes(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });
  writeRel(-1, 1, figureSet.lineUpDoubleLeftDouble);
  fiveTimes(() => {
    writeRel(-2, 0, figureSet.lineDouble);
  });
  writeRel(-2, 0, figureSet.lineUpDoubleRightDouble);
  goToRel(6, 0);
  return [7, 8];
};

const drawSix = () => {
  times((i) => {
    if (i !== 0) {
      writeRel(0, 0, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  }, 7);
  writeRel(-7, 0, figureSet.lineDownDoubleRightDouble);
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
  goToRel(6, 3);
  return [7, 8];
};

const drawSeven = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
  writeRel(0, 1, figureSet.lineVerticalDouble);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  goToRel(8, 6);
  return [8, 8];
};

const drawEight = () => {
  writeRel(0, 2, figureSet.lineVerticalDouble);
  times((i) => {
    writeRel(-1, -1, figureSet.lineVerticalDouble);
  }, 2);
  writeRel(-1, -1, figureSet.lineDownDoubleRightDouble);

  times((i) => {
    writeRel(0, 0, figureSet.lineDouble);
  }, 5);
  writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
  twoTimes(() => {
    writeRel(-1, 1, figureSet.lineVerticalDouble);
  });

  writeRel(-1, 1, figureSet.lineUpDoubleDownDoubleLeftDouble);
  fiveTimes(() => {
    writeRel(-2, 0, figureSet.lineDouble);
  });
  writeRel(-2, 0, figureSet.lineUpDoubleDownDoubleRightDouble);

  twoTimes(() => {
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
  return [7, 8];
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
      writeRel(2, 3, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  return [6, 4];
};

const drawDivide = () => {
  writeRel(4, 2, figureSet.checkboxOff);
  writeRel(-1, 2, figureSet.squareSmall);
  return [5, 6];
};

const drawMultiply = () => {
  writeRel(4, 3, figureSet.circleFilled);
  return [5, 5];
};

const drawEqual = () => {
  fourTimes((i) => {
    if (i === 0) {
      writeRel(1, 2, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  writeRel(-4, 1, figureSet.lineDouble);
  threeTimes(() => {
    writeRel(0, 0, figureSet.lineDouble);
  });
  return [6, 4];
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
  cls,
  cls as clearTerminal,
};
