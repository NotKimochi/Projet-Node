const connection = require("../models/db");

(async () => {
  try {
    await connection.authenticate();
    console.log("✅ Connected to the database successfully.");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error.message);
  } finally {
    await connection.close(); // Toujours fermer la connexion après le test
  }
})();
