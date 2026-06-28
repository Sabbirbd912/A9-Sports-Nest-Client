const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { MongoClient } = require("mongodb");

(async () => {
  console.log("DNS:", dns.getServers());

  const client = new MongoClient(process.env.AUTH_MONGODB_URI);

  try {
    await client.connect();
    console.log("✅ Connected!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
})();