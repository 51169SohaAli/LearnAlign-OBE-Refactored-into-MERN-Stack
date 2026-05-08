const bcrypt = require("bcrypt");

async function hashPassword() {
  const hash = await bcrypt.hash("Riphahf1517@", 10);
  console.log(hash);
}

hashPassword();