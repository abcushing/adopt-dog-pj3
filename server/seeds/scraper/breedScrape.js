const connection = require("../../config/connection");
const { Breed, Dog } = require("../../models");
const axios = require("axios");
const cheerio = require("cheerio");
const breeds = []
n = 0

connection.on("error", (err) => err);

connection.once("open", async () => {
  // get list of symbols
  // destroy dog()

  async function scrape() {
    axios("https://www.thekennelclub.org.uk/search/breeds-a-to-z/", {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    })
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        $(".m-breed-card--padded", html).each(function () {
          n++
          console.log($(this).find(".m-breed-card__title").text());
          breeds.push({
            id:n,
            breed: $(this).find(".m-breed-card__title").text(),
            category: $(this).find(".m-breed-card__category").text(),
            size: $(this)
              .find(".m-breed-summary__list > div:nth-child(1) > dd")
              .text(),
            exercise: $(this)
              .find(".m-breed-summary__list > div:nth-child(2) > dd")
              .text(),
            homeSize: $(this)
              .find(".m-breed-summary__list > div:nth-child(3) > dd")
              .text(),
            grooming: $(this)
              .find(".m-breed-summary__list > div:nth-child(4) > dd")
              .text(),
            coat: $(this)
              .find(".m-breed-summary__list > div:nth-child(5) > dd")
              .text(),
            lifeSpan: parseInt($(this)
              .find(".m-breed-summary__list > div:nth-child(7) > dd")
              .text()
              .split(" ")[1]),
            imgLink:
              "https://www.thekennelclub.org.uk" +
              $(this).find(".a-media__image").attr("src")
          });
        });
        console.log(breeds);
        Breed.collection.insertMany(breeds)
      })
      .catch((err) => console.log(err));
  }

  scrape();
});
