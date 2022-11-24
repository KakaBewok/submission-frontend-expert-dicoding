const main = () => {
  // data source
  const API_URL = "../DATA.json";
  // container
  const cards = document.querySelector(".cards-wrapper");

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      showData(data.restaurants);
    } catch {
      alert("Sorry, server error!");
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
};

// export default main;

main();
