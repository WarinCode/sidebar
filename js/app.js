const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".btn-arrow");
const arrowIcon = document.querySelector(".btn-arrow i");
let isClosed = false;

btn.addEventListener("click", () => {
  isClosed = !isClosed;
  sidebar.id = isClosed ? "sidebarActive" : "sidebarNotActive";
  arrowIcon.className = isClosed
    ? "ri-arrow-right-s-line"
    : "ri-arrow-left-s-line";
});
