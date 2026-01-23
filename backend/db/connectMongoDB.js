import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

<<<<<<< HEAD
export default connectMongoDB;
=======
export default connectMongoDB;
>>>>>>> c1b20d5ab65918b65c63ef6b396957e485012706
