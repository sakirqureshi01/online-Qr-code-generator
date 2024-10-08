function func() {
  var x = document.getElementById("input").value;
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${x}`;
  
  var img = document.getElementById("img");
  img.src = url;
  console.log(url);
}

document.body.addEventListener('mousemove', function (e) {
  const emojis = ['❤️', '✨', '💖', '🎉', '💫', '😊', '😍', '🌟', '🌈', '💌'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
  var bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = randomEmoji; // Add emoji to the bubble
  bubble.style.position = 'absolute';
  bubble.style.fontSize = Math.random() * 20 + 10 + 'px';
  bubble.style.color = '#fff'; // White color for the text
  bubble.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.5)'; // Shadow for depth
  bubble.style.left = e.pageX + 'px';
  bubble.style.top = e.pageY + 'px';
  bubble.style.transition = 'transform 0.5s, opacity 0.5s'; // Smooth transition
  bubble.style.opacity = '1';
  
  document.body.appendChild(bubble);

  // Animate the bubble
  setTimeout(() => {
      bubble.style.transform = 'translateY(-100px)'; // Move bubble up
      bubble.style.opacity = '0'; // Fade out
  }, 10);

  setTimeout(() => {
      bubble.remove(); // Remove after animation
  }, 1000);
});
