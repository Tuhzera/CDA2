function togglemode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const isLightActive = Array.from(html.classList).find((className) => {
    return className === "light";
  });
  localStorage.setItem("isDarkMode", !isLightActive);
}

function initDarkMode() {
  let isDarkMode = localStorage.getItem("isDarkMode");
  isDarkMode = isDarkMode == null ? true : isDarkMode == "true";
  if (!isDarkMode) {
    const html = document.documentElement;
    html.classList.add("light");
  }
}

document.addEventListener("DOMContentLoaded", initDarkMode);
