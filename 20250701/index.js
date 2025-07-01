const cron = require("node-cron");
const fs = require("fs");

// fs.writeFileSync('file.json', JSON.stringify(jsonVariable));

const getRssFeed = require("./get-rss-feed.js");

const every10Seconds = " */10 * * * * *";

cron.schedule(every10Seconds, async function () {
  const rssFeed = (await getRssFeed()).items ?? [];
  console.log(rssFeed);
  const titles = rssFeed.map((el) => el.title);
  fs.writeFileSync("./titles.json", JSON.stringify(titles));
});
