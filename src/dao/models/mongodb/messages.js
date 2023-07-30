import mongoose from "mongoose";

const nameCollection = "messages";

const messageSchema = new mongoose.Schema({
  user: { type: String, require: true },
  message: { type: String, require: true },
});

export const messageModel = mongoose.model(nameCollection, messageSchema);
