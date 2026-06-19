import mongoose from 'mongoose';

const prizeSchema = new mongoose.Schema({
  value: { type: String, required: true },
  weight: { type: Number, required: true },
});

const categorySchema = new mongoose.Schema({
  label: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  sublabel: { type: String, required: true },
  prizes: [prizeSchema],
});

const configSchema = new mongoose.Schema({
  categories: {
    type: Map,
    of: categorySchema,
  },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Config', configSchema);