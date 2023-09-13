import mongoose, { Schema } from 'mongoose';

class MongooseService {
  private count = 0;
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    useFindAndModify: false
  };

  getModel(model: string, schema: Schema) {
    return mongoose.model(model, schema);
  }

  connectWithRetry = () => {
    mongoose
      .connect('mongodb://localhost:27017/meanbooksv2', this.mongooseOptions)
      .then(() => {
        console.log('MongoDB connectec!');
      })
      .catch((err) => {
        const retrySeconds = 5;
        console.log(
          `MongoDB connection failed! (retry #${++this
            .count} after ${retrySeconds} seconds)`
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}

export default new MongooseService();
