'use strict';
let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 5;
let highscore = 0;

// Hàm hiển thị thông báo
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Xử lý khi nhấn nút Check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Không nhập số
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  // Đoán đúng
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    // Đổi màu nền khi thắng
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Mở rộng ô hiển thị số bí mật
    document.querySelector('.number').style.width = '30rem';

    // Cập nhật điểm cao nhất
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Đoán sai
  else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// Xử lý nút Again để chơi lại
document.querySelector('.again').addEventListener('click', function () {
  // Tạo số bí mật mới
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  // Đặt lại điểm số
  score = 20;

  // Cập nhật giao diện
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Khôi phục giao diện ban đầu
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//So hard btw
