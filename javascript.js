/* ================================
   DOM READY (Always First)
================================ */
// document.addEventListener("DOMContentLoaded", () => {
//   // Load components
//   loadComponent("herosection", "./index.html")
//     .then(initCarousel)
//     .catch(() => {
//       console.warn("Carousel component not loaded");
//     });


//   Search input (safe check)
//   const searchInput = document.querySelector(".search");
//   if (searchInput) {
//     searchInput.addEventListener("input", () => {
//       console.log("Searching:", searchInput.value);
//     });
//   }
// });


/* ==============const==================
   COMPONENT LOADER
================================ */
function loadComponent(id, file) {
  const el = document.getElementById(id);

  if (!el) {
    console.warn(`Element with id '${id}' not found`);
    return Promise.reject("Container not found");
  }

  return fetch(file)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load component");
      return res.text();
    })
    .then((html) => {
      el.innerHTML = html;
    })
    .catch((err) => {
      console.error("Load error:", err);
      throw err;
    });
}

 loadComponent("Navbar", "./Navbar.html");




function initCarousel() {
  const images = document.querySelectorAll(".carousel-image");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  if (!prev || !next || images.length === 0) {
    console.warn("Carousel not found on this page");
    return;
  }

  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("hidden", i !== index);
    });
  }

  prev.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  next.addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  showImage(current);
}
