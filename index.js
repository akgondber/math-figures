import figureSet from "figures";
import ansiEscapes from "ansi-escapes";
import { times } from "ramda";
import {
  fiveTimes,
  fourTimes,
  goToRel,
  sevenTimes,
  sixTimes,
  threeTimes,
  twoTimes,
  writeCur,
  writeRel,
} from "./source/utils.js";

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
  return 7;
};

const drawOne = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [4, 6];
};

const drawTwo = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
  writeRel(-1, -1, figureSet.lineDownDoubleRightDouble);
  times(() => {
    process.stdout.write(figureSet.lineDouble);
  }, 5);
  process.stdout.write(figureSet.lineDownDoubleLeftDouble);
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
    if (i === 0) {
      writeRel(0, 0, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  writeCur(figureSet.lineUpDoubleLeftDouble);
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [7, 8];
};

const drawThree = (restorePos = false) => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
  if (restorePos) {
    writeCur(ansiEscapes.cursorSavePosition);
  }
  writeRel(0, 0, figureSet.lineDownDoubleRightDouble);
  fiveTimes(() => {
    process.stdout.write(figureSet.lineDouble);
  });
  process.stdout.write(figureSet.lineDownDoubleLeftDouble);
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
  if (restorePos) {
    writeCur(ansiEscapes.cursorRestorePosition);
  }
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [7, 8];
};

const drawFour = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [6, 8];
};

const drawFive = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [7, 8];
};

const drawSix = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
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
  return [8, 8];
};

const drawEight = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [7, 8];
};

const drawNine = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [7, 8];
};

const drawPlus = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [9, 10];
};

const drawMinus = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
  fourTimes((i) => {
    if (i === 0) {
      writeRel(2, 3, figureSet.lineDouble);
    } else {
      writeRel(0, 0, figureSet.lineDouble);
    }
  });
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [6, 4];
};

const drawDivide = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
  writeRel(4, 2, figureSet.checkboxOff);
  writeRel(-1, 2, figureSet.squareSmall);
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [5, 6];
};

const drawMultiply = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
  writeRel(4, 3, figureSet.circleFilled);
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  return [5, 5];
};

const drawEqual = () => {
  process.stdout.write(ansiEscapes.cursorSavePosition);
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
  process.stdout.write(ansiEscapes.cursorRestorePosition);
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
};
