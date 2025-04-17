function sayHello() {
    const name = document.getElementById("username").value.trim();
    const message = document.getElementById("welcome-message");
  
    if (name) {
      message.textContent = `أهلًا وسهلًا بك يا ${name}! 🌟`;
    } else {
      message.textContent = "مرحبًا بك! 🌟";
    }
  }