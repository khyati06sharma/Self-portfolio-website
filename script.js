document.addEventListener("DOMContentLoaded", () => {

  /* ===== NAVBAR ===== */
  const navbar = document.getElementById("navbar");
  const currentPage = document.body.dataset.page;

  navbar.innerHTML = `
    <div class="nav">
      <div class="nav-logo">
        <h1>KS</h1>
      </div>

      <ul class="menu">
        <li class="${currentPage === 'index' ? 'active' : ''}">
          <a href="index.html">Home</a>
        </li>
        <li class="${currentPage === 'about' ? 'active' : ''}">
          <a href="about.html">About</a>
        </li>
        <li class="${currentPage === 'projects' ? 'active' : ''}">
          <a href="projects.html">Projects</a>
        </li>
        <li class="${currentPage === 'contact' ? 'active' : ''}">
          <a href="contact.html">Contact</a>
        </li>
      </ul>

      <div class="icons">
        <i class="fa fa-search" id="search"></i>
        <i class="fa fa-moon" id="mode"></i>
      </div>

      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;

  /* ===== HAMBURGER ===== */
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // close menu on link click (mobile UX)
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });


  /*  SEARCH  */
  const search = document.getElementById("search");
  const sbox = document.getElementById("sbox");

  if (search && sbox) {
    search.onclick = () => {
      sbox.style.display =
        sbox.style.display === "block" ? "none" : "block";
    };
  }

  /*  DARK MODE  */
const mode = document.getElementById("mode");

// load saved theme
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  mode.classList.replace("fa-moon","fa-sun");
}

// toggle theme
mode.onclick = () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
    mode.classList.replace("fa-moon","fa-sun");
  }else{
    localStorage.setItem("theme","light");
    mode.classList.replace("fa-sun","fa-moon");
  }
};


  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = `
      <div class="footer-box">
        <h1>KS</h1><br>
        <p>
          I focus on building responsive, scalable and user-friendly websites
    using modern web technologies.
        </p>

        <h3>
          <a class="fl" href="index.html">Home</a>
          <a class="fl" href="about.html">About</a>
          <a class="fl" href="projects.html">Projects</a>
          <a class="fl" href="contact.html">Contact</a>
        </h3>

        <div class="ficons">
          <a href="https://www.instagram.com/khyati_2206/" class="fa-brands fa-instagram"></a>
          <a href="https://x.com/shakhyati2206" class="fa-brands fa-x-twitter"></a>
          <a href="https://github.com/khyati06sharma/" class="fa-brands fa-github"></a>
          <a href="https://www.linkedin.com/in/khyati-sharma-b49490342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="fa-brands fa-linkedin"></a>
          <a href="https://t.me/Khyati200604" class="fa-brands fa-telegram"></a>
        </div>

        
        <span><a href="https://www.dezyneecole.com/">Dezyne Ecole College</a></span>
        <h4>© 2026 <span>Khyati Sharma</span> |All Rights Reserved</h4>
      </div>
    `;
  }

});

