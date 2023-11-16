/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/style.scss";
const VALID_NUMBER_ERROR = "Please enter a valid number";
const CONGRATULATIONS_MESSAGE = "Congratulations! You guessed it right!";
const TOO_HIGH_MESSAGE = "Too high, guess again";
const TOO_LOW_MESSAGE = "Too low, guess again";

const Home = () => {
  const [guess, setGuess] = useState("");
  const [range, setRange] = useState(10);
  const [attempts, setAttempts] = useState(3);
  const [history, setHistory] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [canAnswer, setCanAnswer] = useState(true);
  const [selectedRange, setSelectedRange] = useState(0);
  const [currentRange, setCurrentRange] = useState(range);
  const [inputCount, setInputCount] = useState(0);
  const [inputNumber, setInputNumber] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, canAnswer]);

  let userGuess;
  let randomNumber;

  const handleInputChange = (e) => {
    if (!canAnswer) return;
    const input = e.target.value.replace(/[^\d]/g, "");
    setGuess(input);
    setInputCount(inputCount + 1);
    setInputNumber(input);
  };

  const handleArrowKeyPress = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const step = e.key === "ArrowUp" ? 1 : -1;
      const newGuess = Math.min(
        Math.max(Number(guess) + step, 1),
        currentRange
      );
      setGuess(newGuess.toString());
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && canAnswer) {
      e.preventDefault();
      if (!guess || isNaN(guess)) {
        showToast(VALID_NUMBER_ERROR, "error");
        return;
      }
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!canAnswer) return;
    if (!guess || isNaN(guess)) {
      showToast(VALID_NUMBER_ERROR, "error");
      return;
    }

    userGuess = parseInt(guess);
    randomNumber = Math.floor(Math.random() * range) + 1;

    let result;
    if (userGuess === randomNumber) {
      result = "Correct!";
      showToast(CONGRATULATIONS_MESSAGE, "success");
    } else if (userGuess > randomNumber) {
      result = TOO_HIGH_MESSAGE;
      showToast(result, "warning");
    } else {
      result = TOO_LOW_MESSAGE;
      showToast(result, "warning");
    }

    setHistory([...history, { guess: userGuess, result }]);
    setAttempts(attempts - 1);
    setGuess("");

    if (attempts === 1 || userGuess === randomNumber) {
      setShowConfirmModal(true);
      setCanAnswer(false);
      setGameOver(true);
    } else {
      setCanAnswer(true);
    }
  };

  const handleRangeChange = (e) => {
    const newRange = Number(e.target.value);
    setSelectedRange(newRange);
    setCurrentRange(newRange);
    const ratio = newRange / 1000;
    const slider = e.target.parentElement.querySelector(".slider");
    const newSliderValue = ratio * e.target.value;
    if (slider) {
      slider.style.left = `${newSliderValue}px`;
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleResetGame = () => {
    setGuess("");
    setAttempts(3);
    setHistory([]);
    setShowConfirmModal(false);
    setGameOver(false);
    setCanAnswer(true);
  };

  const handleConfirmDelete = () => {
    setHistory([]);
    setShowConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

  const showToast = (message, type) => toast[type](message);

  return (
    <div>
      <ToastContainer />
      <div className="game">
        <h2>Chào mừng bạn đến với trò chơi đoán số!</h2>
        <h2>Bạn cần tìm kiếm một số từ 1 đến {selectedRange}</h2>
        <div className="wrapper">
          <div className="range">
            <div className="range-slider">
              <label>
                <input
                  type="range"
                  min="0"
                  max="2048"
                  step="1"
                  onChange={handleRangeChange}
                />
                {selectedRange}
              </label>
              <div className="slider">
                <span>0</span>
                <span>100</span>
                <span>512</span>
                <span>1024</span>
                <span>1536</span>
                <span>2048</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        {canAnswer && (
          <div>
            <h3>Hãy Thử Nhập 1 Số</h3>
            <input
              value={guess}
              type="number"
              onChange={handleInputChange}
              onKeyDown={handleArrowKeyPress}
              onKeyPress={handleEnterKeyPress}
              ref={inputRef}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
