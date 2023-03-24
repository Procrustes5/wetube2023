import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  discription: String,
  createAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const movieModel = mongoose.model("Video", videoSchema);
export default movieModel;
