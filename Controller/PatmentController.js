import PaytmChecksum from "../paytm/PaytmChecksum.js";
import { paytmMerchantKey, paytmParams } from "../index.js";
export const addPaymentGateway = async (req, res) => {
  try {
    let paytmChecksum = await PaytmChecksum.generateSignature(
      paytmParams,
      paytmMerchantKey
    );
    let params = {
      ...paytmParams,
      'CHECKSUMHASH': paytmChecksum
    };
    res.status(200).json(params);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
