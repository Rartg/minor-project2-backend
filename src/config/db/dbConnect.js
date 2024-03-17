const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const option = {
      socketTimeoutMS: 30000,
      keepAlive: true,
    };
    await mongoose.connect("mongodb+srv://shivanshupadhyay302:Zo5pQfIwZZgp3IRd@cluster0.lj9jx3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", option);
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.dir(error, { depth: 4 });
  }
};

module.exports = dbConnect;
