import { connect } from "mongoose";
import { config } from "dotenv";
config();
const DataBaseURL = process.env.MONGOURL;

const connectTomongo = () => {
  connect(DataBaseURL)
    .then(() => {
      console.log("Connected to Mongo Successfully...");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default connectTomongo;
