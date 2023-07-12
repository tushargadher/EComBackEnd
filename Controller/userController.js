import User from "../model/UserSchema.js";
import Product from "../model/ProductSchema.js";
import bcrypt from "bcrypt";

//userSignup controller
export const userSignUp = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      res.status(400);
      throw new Error("Please Enter All Feilds!");
    }
    //checking if user is already exists or not
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already Exists");
    }

    //before saving user we will encrypt the password
    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);
    //creating new user in database
    const user = await User.create({
      name,
      email,
      password: encryptedPass,
      phone,
    });
    //if user is created then send it to response
    if (user) {
      res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//userLogin controller
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (user && passwordMatch) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
    } else {
      res.status(401).send("Please Check Your Details..!");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//getProduct controller
export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id });
    if (product) {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


