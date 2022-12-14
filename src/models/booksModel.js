const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: ObjectId,
      required: true,
      ref: "User",
      trim: true,
    },
    ISBN: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Book_cover:{
      type:String,
      required:true
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    subcategory: {
      type: String,
      required: true,
      trim: true,
    },
    reviews: {
      type: Number,
      default: 0,
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt:{
      type:Date,
      default:null
    },
    releasedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
