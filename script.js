const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const backdrop = document.getElementById("backdrop");

toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    // Mobile: slide in/out
    sidebar.classList.toggle("mobile-open");
    backdrop.classList.toggle("show");
  } else {
    // Desktop: collapse/expand
    sidebar.classList.toggle("collapsed");
  }
});

// Close sidebar if backdrop clicked (mobile only)
backdrop.addEventListener("click", () => {
  sidebar.classList.remove("mobile-open");
  backdrop.classList.remove("show");
});
