const { parse } = require("rss-to-json");

const RSS_URL = "https://cprss.s3.amazonaws.com/javascriptweekly.com.xml";

async function getRssFeed() {
  const res = await parse(RSS_URL);
  return res;
}

module.exports = getRssFeed;
