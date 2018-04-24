import mongoose, { Schema } from 'mongoose';

/**
 * Order 43: Connect to MongoDB
 */
class ConnectMongoDB {

  constructor() {
    const username = 'yourUsername';
    const password = 'yourPassword';
    const host = 'yourHost';
    const port = '27017';
    const database = 'yourDatabase';
    const uri = `mongodb://${username}:${password}@${host}:${port}/${database}`;
    this.db = mongoose.createConnection(uri);
  }

  find() {
    const huabanSchema = new Schema({
      pin_id: String,
      img_hash: String,
      width: Number,
      height: Number,
      username: String,
      urlname: String,
      raw_text: String,
      load_time: Number
    });

    const drawcrowdModel = this.db.model('huaban_drawcrowd', huabanSchema, 'huaban_drawcrowd');
    drawcrowdModel.findOne({}, (err, result) => {
      console.log(result);
    });
  }
}

export default ConnectMongoDB;
