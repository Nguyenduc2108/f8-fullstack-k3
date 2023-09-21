// tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;

var isDrag = false;
var initialClientX = 0;
var current = 0;
var currentWidth = 0;
var handleChange = function (width) {
  var value = (width * 100) / progressBarWidth;
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  progress.style.width = `${value}%`;
  currentWidth = width;

  var currentTime = (value / 100) * audio.duration;
  audio.currentTime = width;
};

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    handleChange(e.offsetX);
    isDrag = true;
    initialClientX = e.clientX;
    current = e.offsetX;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  current = currentWidth;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    handleChange(current + moveWidth);
  }
});

// Xây dựng player trình phát nhạc

var audio = new Audio("./mp3/yeuvoivang.mp3");

var playBtn = document.querySelector(".play-btn");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

var getTime = function (seconds) {
  //Tính số phút
  var mins = Math.floor(seconds / 60);

  // Tính số giây còn lại
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  durationEl.innerHTML = getTime(audio.duration);
});

var pauseIcon = `<i class="fa-solid fa-pause"></i>`;
var playIcon = `<i class="fa-solid fa-play"></i>`;
playBtn.addEventListener("click", function () {
  console.log(audio.paused);
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //   console.log(audio.currentTime);
  currentTimeEl.innerText = getTime(audio.currentTime);

  var value = (audio.currentTime * 100) / audio.duration;
  progress.style.width = `${value}%`;
});

console.log(lyric);

//Xay dung chuc nang karaoke
var karaoke = document.querySelector(".karaoke");
var karaokeInner = karaoke.querySelector(".karaoke-inner");
var karaokePLayBtn = karaoke.querySelector(".karaoke-play");
var karaokeContent = karaoke.querySelector(".karaoke-content");
var karaokeCloseBtn = karaoke.querySelector(".close");
var player = document.querySelector(".player");

karaokePLayBtn.addEventListener("click", function () {
  karaokeInner.classList.add("show");
  player.classList.add("bottom");
});

karaokeCloseBtn.addEventListener("click", function () {
  karaokeInner.classList.remove("show");
  player.classList.remove("bottom");
});

var karaokeInterval;
// lắng nghe sự kiện play
audio.addEventListener("play", function () {
  console.log("play");
  karaokeInterval = setInterval(handleKaraoke, 10);
});

// lắng nghe sự kiện pause
audio.addEventListener("pause", function () {
  console.log("pause");
  clearInterval(karaokeInterval);
});

var handleKaraoke = function () {
  var currentTime = audio.currentTime * 1000;
  var index = lyric.findIndex(function (lyricItem) {
    return (
      currentTime >= lyricItem.words[0].startTime &&
      currentTime <= lyricItem.words[lyricItem.words.length - 1].endTime
    );
  });

  if (index !== -1) {
    if (index === 0) {
      var outputHtml = `
              <p data-index="${index}">${getSentence(0)}</p> 
              <p data-index="${index + 1}">${getSentence(1)}</p> `;
      karaokeContent.innerHTML = outputHtml;
    } else {
      //so le -> an dong dau va hien thi cua tiep theo
      // so chan -< an dong thu 2 va hien thi cau tiep theo
      if (index % 2 !== 0) {
        changeSentence(
          karaokeContent.children[0],
          getSentence(index + 1),
          index + 1
        );
      } else {
        changeSentence(
          karaokeContent.children[1],
          getSentence(index + 1),
          index + 1
        );
      }
    }

    //xu ly to mau
    var currentLineEl = karaokeContent.querySelector(`[data-index="${index}"]`);
    if (currentLineEl) {
      var wordIndex = getWordIndex(index, currentTime);
      Array.from(currentLineEl.children).forEach(function (wordEl, i) {
        // console.log(wordEl);
        if (wordIndex === 1) {
          //   console.log(wordEl);
          //   console.log(lyric[index].words[wordIndex]);
          var word = lyric[index].words[wordIndex];
          var rate =
            currentTime -
            (word.startTime * 100) / (word.endTime - word.startTime);
          wordEl.children[0].style.width = `${rate}%`;
          if (i > 0) {
            Array.from(currentLineEl.children)[
              i - 1
            ].children[0].style.width = `100%`;
          }
        }
      });
    }
  }
};

var getSentence = function (index) {
  return lyric[index].words
    .map(function (word) {
      return `
      <span class="word">${word.data}
            <span>${word.data}</span>
      </span>`;
    })
    .join(" ");
};

var changeSentence = function (element, sentence, index) {
  element.style.transition = "all 0.3s ease-in-out";
  element.style.opacity = 0;

  setTimeout(function () {
    element.innerHTML = sentence;
    element.style.opacity = 1;
    element.dataset.index = index;
  }, 300);
};

var getWordIndex = function (index, currentTime) {
  return lyric[index].findIndex(function (item) {
    return currentTime >= item.startTime && currentTime <= item.endTime;
  });
};

/*
index = 1 -> Ẩn element 0 -> Hiển thị index = 2
index = 2 -> Ẩn element 1 => hiển thị index = 3
index = 3 -> Ẩn element 0 => hiển thị index = 4
index = 4 -> Ẩn element 1 => hiển thị index = 5
*/
