import mongoose from 'mongoose';

const overrideSchema = new mongoose.Schema({
  categoryKey: { type: String, required: true },
  prize: { type: String, required: true },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Override', overrideSchema);