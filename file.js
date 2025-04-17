function sayHello() {
    const name = document.getElementById("username").value.trim();
    const message = document.getElementById("welcome-message");
  
    if (name) {
      message.textContent = `🎉 أهلًا وسهلًا بك يا ${name}! 🎉`;
    } else {
      message.textContent = "🎉 مرحبًا بك! 🎉";
    }
  
    launchConfetti();
  }
  
  function launchConfetti() {
    const duration = 2000;
    const end = Date.now() + duration;
  
    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  