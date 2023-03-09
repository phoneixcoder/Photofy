import mongooese from 'mongoose';

const connectDB = (url) =>{
    mongooese.set('strictQuery', true);
    mongooese.connect(url)
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.log(err));
}
export default connectDB;