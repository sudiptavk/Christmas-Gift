function openPresent() {
  document.querySelector('.present-box').classList.add('hidden');
  document.getElementById('message').classList.remove('hidden');
}

// Generate floating hearts
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${3 + Math.random() * 2}s`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);
