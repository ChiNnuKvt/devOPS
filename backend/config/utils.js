import dotenv from 'dotenv';
dotenv.config();

const PORT = 5000;
const MONGODB_URI = "mongodb+srv://devops:devops123@cluster0.7nuv6zk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const REDIS_URL = "redis://127.0.0.1:6379";

export { MONGODB_URI, PORT, REDIS_URL };
