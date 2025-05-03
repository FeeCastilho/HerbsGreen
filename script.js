document.addEventListener("DOMContentLoaded", function () {
    const btnTop = document.getElementById("btnTop");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        btnTop.classList.add("show");
      } else {
        btnTop.classList.remove("show");
      }
    });
  
    btnTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  