// 1: Rectangular Star Pattern
function rectangularStarPattern(num) {
  for (let i = 0; i < num; i++) {
    let star = "";
    for (let j = 0; j < num; j++) {
      star += "* ";
    }
    console.log(star);
  }
}

// 2: Right-Angled Triangle Pattern
function rightAngledPattern(num) {
  for (let i = 0; i < num; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
      star += "* ";
    }
    console.log(star);
  }
}

// 3: Right-Angled Number Pyramid
function rightAngledNumberPyramid(num) {
  for (let i = 0; i < num; i++) {
    let numbers = "";
    for (let j = 1; j < i + 1; j++) {
      numbers += j;
    }
    console.log(...numbers);
  }
}

// 4: Right-Angled Number Pyramid – II
function rightAngledNumberPyramid2(num) {
  for (let i = 0; i < num; i++) {
    let numbers = "";
    for (let j = 1; j < i + 1; j++) {
      numbers += i;
    }
    console.log(...numbers);
  }
}

// 5: Inverted Right Pyramid
function invertRightPyramid(num) {
  for (let i = 0; i < num; i++) {
    let result = "";
    for (let j = 0; j < num - i; j++) {
      result += "* ";
    }
    console.log(result);
  }
}

// 6: Inverted Numbered Right Pyramid
function invertNumberedRightPyramid(num) {
  for (let i = 0; i <= num; i++) {
    let result = "";
    for (let j = 1; j <= num - i; j++) {
      result += j;
    }
    console.log(...result);
  }
}

//  7: Star Pyramid
function starPyramid(num) {
  for (let i = 0; i < num; i++) {
    let result = "";

    for (let j = 0; j < num - i; j++) {
      result += " ";
    }

    for (let k = 0; k < 2 * i + 1; k++) {
      result += "*";
    }

    for (let l = 0; l < num - i; l++) {
      result += " ";
    }
    console.log(...result);
  }
}

// 8: Inverted Star Pyramid
function starPyramidInverted(num) {
  for (let i = 0; i < num; i++) {
    let result = "";
    for (let j = 0; j < i + 1; j++) {
      result += " ";
    }

    for (let k = 1; k < 2 * num - i * 2; k++) {
      result += "*";
    }
    console.log(...result);
  }
}

// 9: Diamond Star Pattern
function diamondStarPattern(num) {
  // first Loop
  for (let i = 0; i < num; i++) {
    let result = "";

    for (let j = 0; j < num - i; j++) {
      result += " ";
    }

    for (let k = 0; k < 2 * i + 1; k++) {
      result += "*";
    }

    console.log(result);
  }

  // second loop
  for (let i = 0; i < num; i++) {
    let result = "";
    for (let j = 0; j < i + 1; j++) {
      result += " ";
    }

    for (let k = 1; k < 2 * num - i * 2; k++) {
      result += "*";
    }
    console.log(result);
  }
}

// 10: Half Diamond Star Pattern

function halfDiamondStar(num) {
  for (let i = 0; i < num * 2; i++) {
    let result = "";
    let start = i;

    if (i > num) start = 2 * num - i;

    for (let j = 0; j < start; j++) {
      result += "*";
    }
    console.log(result);
  }
}

// 11: Binary Number Triangle Pattern
function binaryNumberTriangle(num) {
  for (let i = 0; i < num; i++) {
    let result = "";
    for (let j = 0; j < i + 1; j++) {
      if (i % 2 === 0 && j % 2 === 0) {
        result += "1";
      } else if (i % 2 === 0 && j % 2 !== 0) {
        result += "0";
      } else if (i % 2 !== 0 && j % 2 === 0) {
        result += "0";
      } else if (i % 2 !== 0 && j % 2 !== 0) {
        result += "1";
      }
    }
    console.log(result);
  }
}

// 12: Number Crown Pattern
function crownPattern(num) {
  for (let i = 1; i < num + 1; i++) {
    let result = "";
    for (let j = 1; j < i + 1; j++) {
      result += j;
    }

    for (let k = 1; k < 2 * num - i * 2 + 1; k++) {
      result += " ";
    }

    for (let j = i; j >= 1; j--) {
      result += j;
    }

    console.log(...result);
  }
}

//  13: Increasing Number Triangle Pattern

function increaseNumberTriangle(num) {
  let number = 1;

  for (let i = 1; i <= num; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += number + " ";
      number++;
    }
    console.log(result);
  }
}

// 14: Increasing Letter Triangle Pattern
function increaseLetterTriangle(num) {
  let characterCode = 65;
  for (let i = 1; i <= num; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += String.fromCharCode(characterCode);
      characterCode++;
    }
    console.log(...result);
  }
}

// 15: Reverse Letter Triangle Pattern
function reverseLetterTriangle(num) {
  for (let i = 0; i <= num; i++) {
    let characterCode = 65;
    let result = "";
    for (let j = 1; j <= num - i; j++) {
      result += String.fromCharCode(characterCode);
      characterCode++;
    }
    console.log(...result);
  }
}

// 16: Alpha-Ramp Pattern
function alphaRampPattern(num) {
  for (let i = 0; i < num; i++) {
    let characterCode = 65;
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += String.fromCharCode(characterCode + i);
    }

    console.log(...result);
  }
}

// rectangularStarPattern(10);
// rightAngledPattern(10);
// rightAngledNumberPyramid(10);
// rightAngledNumberPyramid2(10);
// invertRightPyramid(10);
// invertNumberedRightPyramid(10);
// starPyramid(6);
// starPyramidInverted(10);
// diamondStarPattern(5);
// halfDiamondStar(5);
// binaryNumberTriangle(5);
// crownPattern(9);
// increaseNumberTriangle(5);
// increaseLetterTriangle(5);
// reverseLetterTriangle(5);
alphaRampPattern(5);
