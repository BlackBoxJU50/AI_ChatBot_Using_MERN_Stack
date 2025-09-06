import app from "./app.js";
import {connectToDatabase} from "./db/connnection.js";
const PORT = process.env.PORT || 5000;
// database connection
connectToDatabase().then(() => 
{


  app.listen(PORT , () => console.log('Server is running on port 5000'));

})
 .catch((err) => console.log(err));
// connection and listening to port