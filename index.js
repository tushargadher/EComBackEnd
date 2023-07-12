import express from "express";
import cors from "cors";
import connectTomongo from "./config/db.js";
// import DefaultData from "./Default.js";
import Router from "./routes/routes.js";
import { v4 as uuid } from "uuid";
const app = express();
const host = "localhost";
const port = 5000;
connectTomongo();
app.use(cors());
app.use(express.json()); //to accepet json data in resquest
app.use("/", Router);

app.listen(port, () => {
  console.log(`server is running on http://${host}:${port}`);
});
// DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "599";
paytmParams["CALLBACK_URL"] = "http://localhost:5000/callback";

paytmParams["EMAIL"] = "tushargadher123@gmail.com";
paytmParams["MOBILE_NO"] = "12345678";
