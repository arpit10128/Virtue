const mongoose = require("mongoose");
const initData = require("./data");
const User = require("../models/user");

const MONGO_URL = 'mongodb://127.0.0.1:27017/ZoomMyTest';

main()
.then((res) => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
  }

  const initDb = async () => {
    try {
        await User.deleteMany({});
        initData.data = initData.data.map((obj) => ({...obj, owner: "27svs8wwtsgs"}));
        await User.insertMany(initData.data);
        console.log("init successfully");
    } catch (error) {
        console.log(error);
    }
        
  }

  initDb();