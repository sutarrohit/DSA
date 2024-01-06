// 1. Reverse Digit | leetCode : 7
const reverse = function (x) {
  let reverseNumber = 0;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  let n = x < 0 ? -x : x;

  while (n > 0) {
    let digit = n % 10;
    reverseNumber = reverseNumber * 10 + digit;

    n = Math.floor(n / 10);
  }

  if (x === 0) return x;
  if (reverseNumber > (x < 0 ? -INT_MIN : INT_MAX)) {
    return 0;
  }
  return x < 0 ? reverseNumber * -1 : reverseNumber;
};

//2. Palindrome Number | leetCode : 9
const isPalindrome = function (x) {
  let num = x;
  let reverseNumber = 0;

  while (num > 0) {
    const digit = num % 10;
    reverseNumber = reverseNumber * 10 + digit;
    num = Math.floor(num / 10);
  }
  return x === reverseNumber ? true : false;
};

//3. Check if a number is Armstrong Number or not
const armstrongNumber = (num) => {
  let n = num;
  let power = 0;
  while (n > 0) {
    power += 1;
    n = Math.floor(n / 10);
  }

  let sumOfDigit = 0;
  n = num;

  while (n > 0) {
    let digit = n % 10;
    sumOfDigit += digit ** power;
    n = Math.floor(n / 10);
  }
  return sumOfDigit === num
    ? "Yes, it is an Armstrong Number"
    : "No, it is not an Armstrong Number";
};

// 4. Print all Divisors of a given Number
const allDivisors = (num) => {
  let numbers = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) numbers.push(i);
  }
  return numbers;
};

// 5. check Prime number
const checkPrime = (num) => {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) count += 1;
  }
  return count === 2 ? true : false;
};

//6. "GCD," which stands for Greatest Common Divisor || "HCF," then it stands for Highest Common Factor, which
const findGCD = (num1, num2) => {
  let GCD = 1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0) {
      if (num2 % i === 0) {
        GCD = i;
      }
    }
  }
  return GCD;
};

const findGCDUsingEquilateralAlgo = (num1, num2) => {
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }
  return num1 === 0 ? num2 : num1;
};

// console.log(reverse(54321));
// console.log(isPalindrome(121));
// console.log(armstrongNumber(1634));
// console.log(...allDivisors(97));
// console.log(checkPrime(5));
// console.log(findGCD(5, 100));
// console.log(findGCDUsingEquilateralAlgo(78, 490));
