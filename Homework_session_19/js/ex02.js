// Bài 2
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  var i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}
function averagePrimes(arr) {
  var sum = 0;
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
      count++;
    }
  }
  if (count === 0) {
    return "Không có số nguyên tố";
  }
  return sum / count;
}

const arr = [2, 3, 5, 7, 10, 15];
const average = averagePrimes(arr);

console.log(arr);

if (typeof average === "number") {
  console.log(`Trung bình các số nguyên tố trong mảng là: ${average}`);
} else {
  console.log(average);
}
console.log();
