import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  igHandle: { type: String, default: 'your_instagram' },
  igLink: { type: String, default: 'https://instagram.com/your_instagram' },
  waLink: { type: String, default: 'https://wa.me/1234567890' },
  requireIG: { type: Boolean, default: true },
  requireWA: { type: Boolean, default: true },
  adminKey: { type: String, default: 'ADMIN2024' },
  skipKey: { type: String, default: 'SKIP2024' },
  cardTitle: { type: String, default: '🎟 Scratch & Win' },
  cardSubtitle: { type: String, default: 'Follow us, then scratch your prize!' },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Settings', settingsSchema);