const btn = document.getElementById("dark-mode-toggle");

if (localStorage.getItem("dark") === "on") {
  document.body.classList.add("dark-mode");
  btn.textContent = "☀️ Light";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark", "on");
    btn.textContent = "☀️ Light";
  } else {
    localStorage.setItem("dark", "off");
    btn.textContent = "🌙 Dark";
  }
});
