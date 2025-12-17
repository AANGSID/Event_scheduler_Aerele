function showToast(message, type = "success") {
  const container = document.createElement("div");
  container.className = "toast-container";

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.borderLeftColor =
    type === "success" ? "#22c55e" : "#ef4444";

  toast.innerText = message;
  container.appendChild(toast);
  document.body.appendChild(container);

  setTimeout(() => container.remove(), 4000);
}
