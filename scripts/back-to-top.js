// 返回顶部按钮
(function() {
  'use strict';

  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.innerHTML = '↑';
  btn.title = '返回顶部';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.opacity = window.pageYOffset > 300 ? '1' : '0';
    btn.style.visibility = window.pageYOffset > 300 ? 'visible' : 'hidden';
  });
})();