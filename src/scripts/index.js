// import "../styles/main.css";
// import "regenerator-runtime";

const main = () => {
  const API_URL = "../DATA.json";
  // container
  const cards = document.querySelector(".cards-wrapper");

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      showData(data.restaurants);
    } catch (err) {
      alert(err);
    }
  };
  const showData = (data) => {
    cards.innerHTML = "";

    data.forEach((dt) => {
      const { name, description, pictureId, city, rating } = dt;

      const dataList = document.createElement("main");

      dataList.innerHTML = `
                                <div tabindex="0" class="card">
                                <img
                                  tabindex="0"
                                  src="${pictureId}"
                                  alt="Image of ${name}"
                                />
                                <div class="card-body">
                                  <div class="card-city-wrapper">
                                    <div tabindex="0" class="card-city">${city}</div>
                                  </div>
                                  <div tabindex="0" class="card-rating">${rating} ⭐</div>
                                  <div tabindex="0" class="card-name">${name}</div>
                                  <p tabindex="0" class="card-desc">
                                  ${description}
                                  </p>
                                </div>
                                </div>
              `;
      cards.appendChild(dataList);
    });
  };
  getData(API_URL);

  // hamburger menu
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  // navbar fixed and shortcut to top
  window.onscroll = () => {
    const toTop = document.querySelector(".to-top");
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
    } else {
      header.classList.remove("navbar-fixed");
      toTop.classList.add("hidden");
    }
  };
};

main();
