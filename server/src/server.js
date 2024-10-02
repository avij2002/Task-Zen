import connectDatabase from "./database/database.js";
import dotenv from "dotenv";
import { app, PORT } from "./app.js";

dotenv.config({
  path: "./.env",
});

/**
 * Connecting to the database
 */

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SUCCESS: Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`ERROR: In connecting database or starting server: ${error}`);
  });

export { app, PORT };
