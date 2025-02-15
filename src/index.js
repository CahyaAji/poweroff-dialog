const restartBtn = document.getElementById("restart-btn");
const shutdownBtn = document.getElementById("shutdown-btn");
const cancelBtn = document.getElementById("cancel-btn");

cancelBtn.addEventListener("click", () => {
  window.NodeFn.cancel();
});

restartBtn.addEventListener("click", () => {
  restartBtn.classList.add("clicked");
  restartBtn.classList.add("hidden");
  shutdownBtn.classList.add("hidden");
  window.NodeFn.restart();
  const loadingText = document.getElementById("loading-text");
  loadingText.textContent = "Restarting...";
  restartBtn.style.display = "none";
  shutdownBtn.style.display = "none";
  loadingText.style.display = "block";
  loadingText.classList.add("visible");
});

shutdownBtn.addEventListener("click", () => {
  shutdownBtn.classList.add("clicked");
  restartBtn.classList.add("hidden");
  shutdownBtn.classList.add("hidden");
  window.NodeFn.shutdown();
  const loadingText = document.getElementById("loading-text");
  loadingText.textContent = "Shutting Down...";
  restartBtn.style.display = "none";
  shutdownBtn.style.display = "none";
  loadingText.style.display = "block";
  loadingText.classList.add("visible");
});
