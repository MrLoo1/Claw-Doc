// 阅读进度条
(function() {
  'use strict';

  const progressBar = document.createElement('div');
  progressBar.id = 'reading-progress';
  document.body.appendChild(progressBar);

  function updateProgress() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = ((winScroll / height) * 100) + '%';
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress();
})();