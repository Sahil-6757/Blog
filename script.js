async function sport() {
  let response = await fetch("https://news-ir1m.onrender.com/formget");
  let data = await response.json();
  let articles = await data;
  let row = document.getElementById("row");

  articles.map((element) => {
    row.innerHTML += `
      <div class="newsItem my-2">
      <div class="imageBanner">
          <img
            src=${element.imageurl}
            class="image"
            alt=""
          />
        </div>
        <div class="content">
        <h3 class="text-center">${element.name}</h3>
        <hr/>
          <h5>
            ${element.description}
          </h5>
          <p class="content-publish">Published At ${element.date}</p>
        </div> </div>`;
  });
}

async function indianNews() {
  let response = await fetch("https://news-ir1m.onrender.com/indianNews");
  let data = await response.json();
  let articles = await data;
  let row = document.getElementById("rowIndian");
  row.innerHTML = ``;
  articles.map((element) => {
    console.log(element);
    row.innerHTML += `
      <div class="newsItem my-2">
      <div class="imageBanner">
          <img
            src=${element.imageurl}
            class="image"
            alt=""
          />
        </div>
        <div class="content">
        <h3 class="text-center">${element.name}</h3>
        <hr/>
          <h5>
            ${element.description}
          </h5>
          <p class="content-publish">Published At ${element.date}</p>
        </div>
         </div>`;
  });
}

window.addEventListener("load", (e) => {
  indianNews();
  sport();
});
