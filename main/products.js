let products = {
  data: [
    {
      productName: "Nike Air Zoom Pegasus 39",
      category: "Nike",
      price: "630",
      image: "img/Nike Air Zoom Pegasus 39.jpg",
    },
        {
      productName: "Nike Air Zoom Pegasus 38",
      category: "Nike",
      price: "660",
      image: "img/Nike Air Zoom Pegasus 38.jpg",
    },
        {
      productName: "Nike Air Max 90 SE Next Nature",
      category: "Nike",
      price: "890",
      image: "img/Nike Air Max 90 SE Next Nature.jpg",
    },
        {
      productName: "Nike Air More Uptempo '96",
      category: "Nike",
      price: "720",
      image: "img/Nike Air More Uptempo '96.jpg",
    },

        {
      productName: "Nike Downshifter 12",
      category: "Nike",
      price: "750",
      image: "img/Nike Downshifter 12.jpg",
    },
        {
      productName: "Nike Dunk High Retro",
      category: "Nike",
      price: "890",
      image: "img/Nike Dunk High Retro.jpg",
    },
        {
      productName: "Nike Dunk Low Retro Premium blue",
      category: "Nike",
      price: "899",
      image: "img/Nike Dunk Low Retro Premium blue.jpg",
    },
        {
      productName: "Nike Dunk Low Retro Premium",
      category: "Nike",
      price: "899",
      image: "img/Nike Dunk Low Retro Premium.jpg",
    },
        {
      productName: "Nike Renew Ride 3",
      category: "Nike",
      price: "699",
      image: "img/Nike Renew Ride 3.jpg",
    },
    {
      productName: "adidas Originals Continental 80 Stripes",
      category: "adidas",
      price: "749",
      image: "img/adidas Originals Continental 80 Stripes.jpg",
    },
    {
      productName: "adidas Originals Forum Low",
      category: "adidas",
      price: "699",
      image: "img/adidas Originals Forum Low.jpg",
    },
    {
      productName: "adidas Originals Nizza Hi RF",
      category: "adidas",
      price: "829",
      image: "img/adidas Originals Nizza Hi RF.jpg",
    },
    {
      productName: "adidas Originals NMD_R1 V3",
      category: "adidas",
      price: "929",
      image: "img/adidas Originals NMD_R1 V3.jpg",
    },
    {
      productName: "adidas Originals NMD_V3",
      category: "adidas",
      price: "889",
      image: "img/adidas Originals NMD_V3.jpg",
    },
    {
      productName: "adidas Originals Ozelia",
      category: "adidas",
      price: "789",
      image: "img/adidas Originals Ozelia.jpg",
    },
    {
      productName: "adidas Originals Retropy F2",
      category: "adidas",
      price: "679",
      image: "img/adidas Originals Retropy F2.jpg",
    },
    {
      productName: "adidas Originals Superstar",
      category: "adidas",
      price: "849",
      image: "img/adidas Originals Superstar.jpg",
    },

    {
      productName: "adidas Originals ZX 22 Boost",
      category: "adidas",
      price: "749",
      image: "img/adidas Originals ZX 22 Boost.jpg",
    },
    {
      productName: "Puma Basket Classic",
      category: "Puma",
      price: "949",
      image: "img/Puma Basket Classic.jpg",
    },

    {
      productName: "Puma Night Runner",
      category: "Puma",
      price: "749",
      image: "img/Puma Night Runner.jpg",
    },
    {
      productName: "Puma Ralph Sampson Lo",
      category: "Puma",
      price: "849",
      image: "img/Puma Ralph Sampson Lo.jpg",
    },
    {
      productName: "Puma Resolve Street",
      category: "Puma",
      price: "679",
      image: "img/Puma Resolve Street.jpg",
    },
    {
      productName: "Puma RS-Z",
      category: "Puma",
      price: "569",
      image: "img/Puma RS-Z.jpg",
    },
    {
      productName: "Puma Slipstream Lo Reprise",
      category: "Puma",
      price: "789",
      image: "img/Puma Slipstream Lo Reprise.jpg",
    },
    {
      productName: "Puma Twitch Runner",
      category: "Puma",
      price: "939",
      image: "img/Puma Twitch Runner.jpg",
    },
    {
      productName: "Puma Wild Rider Rollin'",
      category: "Puma",
      price: "899",
      image: "img/Puma Wild Rider Rollin'.jpg",
    },
    {
      productName: "Puma Wild Rider",
      category: "Puma",
      price: "679",
      image: "img/Puma Wild Rider.jpg",
    },
  ],
};

for (let i of products.data) {

  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  let price = document.createElement("h6");
  price.innerText = "RM" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};