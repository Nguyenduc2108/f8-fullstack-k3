// bài 1:
console.log("Bài 1:");
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
function intersection(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
var intersection1 = intersection(arrA, arrB);
console.log(intersection1);

// Bài 2
console.log("Bài 2:");
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function flattenArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
var flattened = flattenArray(arr);
console.log(flattened);

// Bài 3:
console.log("Bài 3:");
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
function separateType(arr) {
  var result = [];
  for (var i = 0; i < arr[0].length; i++) {
    var typeArray = [];
    for (var j = 0; j < arr.length; j++) {
      typeArray.push(arr[j][i]);
    }
    result.push(typeArray);
  }
  return result;
}
var separated = separateType(arr);
console.log(separated);

// Bài 4
var data = [
  {
    img: `https://plus.unsplash.com/premium_photo-1674582279349-901af56ed59b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1079&q=80`,
    title: `Tiêu đề bài viết 1`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem reiciendis
            voluptas quibusdam impedit totam est ipsum itaque quisquam necessitatibus
            beatae?`,
  },
  {
    img: `https://plus.unsplash.com/premium_photo-1674582279349-901af56ed59b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1079&q=80`,
    title: `Tiêu đề bài viết 2`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem reiciendis
        voluptas quibusdam impedit totam est ipsum itaque quisquam necessitatibus
        beatae?`,
  },
  {
    img: `https://plus.unsplash.com/premium_photo-1674582279349-901af56ed59b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1079&q=80`,
    title: `Tiêu đề bài viết 3`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem reiciendis
        voluptas quibusdam impedit totam est ipsum itaque quisquam necessitatibus
        beatae?`,
  },
];

var Container = document.querySelector(".container");
for (var index in data) {
  var html = `
      <div class="item">
          <div class="image">
              <img src="${data[index].img}" alt="" />
          </div>
          <div class="content">
              <h3 class="title">${data[index].title}</h3>
              <p class="text">${data[index].text}</p>
          </div>
      </div>
      `;
  Container.innerHTML += html;
}
