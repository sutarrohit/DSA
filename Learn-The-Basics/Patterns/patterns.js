// 1: Rectangular Star Pattern
function rectangularStarPattern(num) {
  for (let i = 0; i < num; i++) {
    let star = "";
    for (let j = 0; j < num; j++) {
      star += "*";
    }
    console.log(star);
  }
}

// 2: Right-Angled Triangle Pattern
function rightAngledPattern(num) {
  for (let i = 0; i < num; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
      star += "*";
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

// rectangularStarPattern(10);
// rightAngledPattern(10);
// rightAngledNumberPyramid(10);
rightAngledNumberPyramid2(10);
