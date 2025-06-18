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
import { drawError, drawSuccess } from "./source/status-figures.js";

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
  let offsetX = 0;
  let offsetY = 0;
  let offsets;

  offsets = writeRel(0, 2, figureSet.lineSlash);
  offsetX += offsets[0];
  offsetY += offsets[1];

  twoTimes(() => {
    offsets = writeRel(0, -1, figureSet.lineSlash);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });

  offsets = writeCur(figureSet.lineVerticalBold);
  offsetX += offsets[0];
  offsetY += offsets[1];
  sixTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalBold);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });

  return [offsetX, offsetY];
};

const drawTwo = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets;

  offsets = writeCur(figureSet.lineDownDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  times(() => {
    offsets = writeCur(figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  }, 5);
  writeCur(figureSet.lineDownDoubleLeftDouble);
  threeTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });

  offsets = writeRel(-1, 0, figureSet.lineUpDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(-2, 0, figureSet.lineDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];

  fourTimes((i) => {
    if (i === 0) {
      offsets = writeRel(-2, 0, figureSet.lineDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(-2, 0, figureSet.lineDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  });
  offsets = writeRel(-2, 0, figureSet.lineDownDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  threeTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-1, 0, figureSet.lineUpDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];

  fiveTimes((i) => {
    offsets = writeRel(0, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeCur(figureSet.lineUpDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];

  return [offsetX, offsetY];
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
  let offsetX = 0;
  let offsetY = 0;
  let offsets;

  threeTimes((i) => {
    if (i === 0) {
      offsets = writeRel(0, 0, figureSet.lineVerticalDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  });
  offsets = writeRel(-1, 1, figureSet.lineUpDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  times(() => {
    offsets = writeRel(0, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  }, 4);
  offsets = writeRel(0, 0, figureSet.lineUpDoubleDownDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(-1, -1, figureSet.lineVerticalDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = writeRel(-1, -1, figureSet.lineVerticalDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  times((i) => {
    if (i === 0) {
      offsets = writeRel(-1, 3, figureSet.lineVerticalDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  }, 3);
  return [offsetX, offsetY];
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
  let offsetX = 0;
  let offsetY = 0;
  let offsets = [];

  times((i) => {
    if (i !== 0) {
      offsets = writeRel(0, 0, figureSet.lineDouble);
    } else {
      offsets = writeRel(0, 0, figureSet.lineDownDoubleRightDouble);
    }
    offsetX += offsets[0];
    offsetY += offsets[1];
  }, 7);
  offsets = goToRel(-6, 0);
  offsetX += offsets[0];
  offsetY += offsets[1];
  fiveTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-1, 1, figureSet.lineUpDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  let maxHorOffset = 0;
  fiveTimes(() => {
    offsets = writeRel(0, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
    maxHorOffset++;
  });
  offsets = writeRel(0, 0, figureSet.lineUpDoubleLeftDouble);
  maxHorOffset++;
  offsetX += offsets[0];
  offsetY += offsets[1];
  twoTimes(() => {
    offsets = writeRel(-1, -1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-1, -1, figureSet.lineDownDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  fiveTimes(() => {
    offsets = writeRel(-2, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-2, 0, figureSet.lineUpDoubleDownDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  offsets = goToRel(maxHorOffset, 3);
  offsetX += offsets[0];
  offsetY += offsets[1];
  return [offsetX, offsetY];
};

const drawSeven = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets = [];
  offsets = writeRel(0, 0, figureSet.lineVerticalDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  times((i) => {
    if (i === 0) {
      offsets = writeRel(-1, -1, figureSet.lineDownDoubleRightDouble);
    } else {
      offsets = writeRel(0, 0, figureSet.lineDouble);
    }
    offsetX += offsets[0];
    offsetY += offsets[1];
  }, 7);
  offsets = writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  sixTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  return [offsetX, offsetY];
};

const drawEight = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets = [];
  sixTimes((i) => {
    if (i === 0) {
      offsets = writeRel(0, 0, figureSet.lineDownDoubleRightDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(0, 0, figureSet.lineDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  });
  fourTimes((i) => {
    if (i === 0) {
      offsets = writeRel(0, 0, figureSet.lineDownDoubleLeftDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  });
  sixTimes((i) => {
    if (i === 0) {
      offsets = writeRel(-1, 0, figureSet.lineUpDoubleDownDoubleLeftDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(-2, 0, figureSet.lineDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  });
  threeTimes((i) => {
    if (i === 0) {
      offsets = writeRel(-2, 0, figureSet.lineUpDoubleDownDoubleRightDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(-1, -1, figureSet.lineVerticalDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  });
  offsets = goToRel(0, 2);
  offsetX += offsets[0];
  offsetY += offsets[1];
  fourTimes((i) => {
    if (i === 3) {
      offsets = writeRel(-1, 0, figureSet.lineUpDoubleRightDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  });
  sixTimes((i) => {
    if (i === 5) {
      offsets = writeRel(0, 0, figureSet.lineUpDoubleLeftDouble);
    } else {
      offsets = writeRel(0, 0, figureSet.lineDouble);
    }
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  twoTimes((i) => {
    offsets = writeRel(-1, -1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = goToRel(0, 2);
  offsetX += offsets[0];
  offsetY += offsets[1];
  return [offsetX, offsetY];
};

const drawNine = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets = [];
  offsets = writeRel(5, 3, figureSet.lineUpDoubleDownDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];

  twoTimes((i) => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-1, 1, figureSet.lineUpDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  fiveTimes((i) => {
    offsets = writeRel(
      -2,
      0,
      i === 4 ? figureSet.lineUpDoubleRightDouble : figureSet.lineDouble,
    );
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  fiveTimes((i) => {
    if (i === 0) {
      offsets = writeRel(3, -3, figureSet.lineDouble);
      offsetX += offsets[0];
      offsetY += offsets[1];
    } else {
      offsets = writeRel(
        -2,
        0,
        i === 4 ? figureSet.lineUpDoubleRightDouble : figureSet.lineDouble,
      );
      offsetX += offsets[0];
      offsetY += offsets[1];
    }
  });
  twoTimes((i) => {
    offsets = writeRel(-1, -1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  sixTimes((i) => {
    if (i === 0) {
      offsets = writeRel(-1, -1, figureSet.lineDownDoubleRightDouble);
    } else {
      offsets = writeRel(
        0,
        0,
        i === 5 ? figureSet.lineDownDoubleLeftDouble : figureSet.lineDouble,
      );
    }
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  twoTimes((i) => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = goToRel(0, 4);
  offsetX += offsets[0];
  offsetY += offsets[1];
  return [offsetX, offsetY];
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

const drawQuestion = () => {
  let offsetX = 0;
  let offsetY = 0;
  let offsets;
  fiveTimes((i) => {
    if (i === 0) {
      offsets = writeCur(figureSet.lineDownDoubleRightDouble);
    } else {
      offsets = writeCur(figureSet.lineDouble);
    }
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeCur(figureSet.lineDownDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  twoTimes((i) => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-1, 1, figureSet.lineUpDoubleLeftDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  twoTimes(() => {
    offsets = writeRel(-2, 0, figureSet.lineDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-2, 0, figureSet.lineDownDoubleRightDouble);
  offsetX += offsets[0];
  offsetY += offsets[1];
  twoTimes(() => {
    offsets = writeRel(-1, 1, figureSet.lineVerticalDouble);
    offsetX += offsets[0];
    offsetY += offsets[1];
  });
  offsets = writeRel(-1, 1, figureSet.bullet);
  offsetX += offsets[0];
  offsetY += offsets[1];

  return [offsetX, offsetY];
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
  drawQuestion,
  cls,
  cls as clearTerminal,
  drawSuccess,
  drawError,
};
