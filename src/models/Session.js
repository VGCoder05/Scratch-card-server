import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  uid: { type: String, default: null },
  category: { type: String, required: true },
  categoryIcon: { type: String, required: true },
  prize: { type: String, required: true },
  gateSkipped: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
  ip: { type: String, default: null },
  userAgent: { type: String, default: null },
});

export default mongoose.model('Session', sessionSchema);