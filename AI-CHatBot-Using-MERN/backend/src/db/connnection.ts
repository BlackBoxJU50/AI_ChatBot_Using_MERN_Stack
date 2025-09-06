import {connect , disconnect } from "mongoose";
export default  async function connectToDatabase(){

try {
    await connect(process.env.MONGODB_URL!);
    console.log("Database connected successfully");
} catch (error) {
    console.log("Database connection failed");
 throw new Error("Could not connect to database");

}


}

async function disconnectToDatabase(){
    try {
        await  disconnect();
        console.log("Database disconnected successfully");
    }
    catch (error) {
        console.log("Database disconnection failed");
     throw new Error("Could not disconnect to database");   
}
}
export  {disconnectToDatabase , connectToDatabase   };