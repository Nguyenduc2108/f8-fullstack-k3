// Xu ly thoi gian

const today = new Date();
console.log(today);

const date = new Date("2023-10-20 21:40:00");
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime()); // So mili giay tinh tu nam 1970 den thoi diem can lay

date.setDate(19);
console.log(date);

const clock = () => {
  const today = new Date();
  const days = [
    "Chu nhat",
    "thu hai",
    "thu ba",
    "thu tu",
    "thu nam",
    "thu sau",
    "thu bay",
  ];
  const output = `Hom nay la thu:${
    days[today.getDay()]
  } - ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  document.body.innerHTML = output;
};
setInterval(clock, 1000);

// Chonj thoi gian ket thuc khuyen mai => Cuoi thang

// TInh ra: Con bao nhieu ngay , gio , phut , giay -> DEm nguoc

// khi nao het time -> An countdown
