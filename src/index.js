const restartBtn = document.getElementById("restart-btn");
const shutdownBtn = document.getElementById("shutdown-btn");
const cancelBtn = document.getElementById("cancel-btn");

cancelBtn.addEventListener("click", () => {
  window.NodeFn.cancel();
});

restartBtn.addEventListener("click", () => {
  restartBtn.classList.add("clicked");
  window.NodeFn.restart();
});

shutdownBtn.addEventListener("click", () => {
  shutdownBtn.classList.add("clicked");
  window.NodeFn.shutdown();
});
