async function loadDoc() {
  let response = await fetch("Newsdata/api/general.json");
  let data = await response.json();
  let articles = await data.articles;
  let row = document.getElementById("row");
  // console.log(articles)

  articles.map((element) => {
    // console.log(element)
    row.innerHTML += ` <div class="col-md-4 my-2">
    <div class="card" style="width: 18rem">
      <img src="${element.urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">
          ${element.description}
        </p>
        <a href="${element.url}" class="btn btn-primary mx-5">Read More</a>
        <div class="d-flex justify-content-center">
        <p class="text-center text-danger">Source: ${element.source.name}</p> 
        </div>
        
      </div>
    </div>
  </div>`;
  });
}
async function sport() {
  let response = await fetch("Newsdata/api/sports.json");
  let data = await response.json();
  let articles = await data.articles;
  let row = document.getElementById("row");
  row.innerHTML = ``;
  // console.log(articles)

  articles.map((element) => {
    // console.log(element)
    row.innerHTML += ` <div class="col-md-4 my-2">
    <div class="card" style="width: 18rem">
      <img src="${element.urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">
          ${element.description}
        </p>
        <a href="${element.url}" class="btn btn-primary mx-5">Read More</a>
        <div class="d-flex justify-content-center">
        <p class="text-center text-danger">Source: ${element.source.name}</p> 
        </div>
        
      </div>
    </div>
  </div>`;
  });
}

async function entertainment() {
  let response = await fetch("Newsdata/api/entertainment.json");
  let data = await response.json();
  let articles = await data.articles;
  let row = document.getElementById("row");
  row.innerHTML = ``;
  // console.log(articles)

  articles.map((element) => {
    // console.log(element)
    row.innerHTML += ` <div class="col-md-4 my-2">
    <div class="card" style="width: 18rem">
      <img src="${element.urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">
          ${element.description}
        </p>
        <a href="${element.url}" class="btn btn-primary mx-5">Read More</a>
        <div class="d-flex justify-content-center">
        <p class="text-center text-danger">Source: ${element.source.name}</p> 
        </div>
        
      </div>
    </div>
  </div>`;
  });
}

async function technology() {
  let response = await fetch("Newsdata/api/technology.json");
  let data = await response.json();
  let articles = await data.articles;
  let row = document.getElementById("row");
  row.innerHTML = ``;
  // console.log(articles)

  articles.map((element) => {
    // console.log(element)
    row.innerHTML += ` <div class="col-md-4 my-2">
    <div class="card" style="width: 18rem">
      <img src="${element.urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">
          ${element.description}
        </p>
        <a href="${element.url}" class="btn btn-primary mx-5">Read More</a>
        <div class="d-flex justify-content-center">
        <p class="text-center text-danger">Source: ${element.source.name}</p> 
        </div>
        
      </div>
    </div>
  </div>`;
  });
}

loadDoc();
