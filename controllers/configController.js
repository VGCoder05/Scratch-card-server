import Config from '../models/Config.js';

// Default config
const defaultConfig = {
  ac: {
    label: 'AC', icon: '🌬️', color: '#00cfff', sublabel: 'OFF on AC',
    prizes: [
      { value: '₹2,000 OFF', weight: 50 },
      { value: '₹5,000 OFF', weight: 30 },
      { value: '₹10,000 OFF', weight: 20 },
    ],
  },
  tv: {
    label: 'TV', icon: '📺', color: '#a78bfa', sublabel: 'OFF on TV',
    prizes: [
      { value: '₹1,500 OFF', weight: 50 },
      { value: '₹3,000 OFF', weight: 30 },
      { value: '₹7,000 OFF', weight: 20 },
    ],
  },
  phone: {
    label: 'Phone', icon: '📱', color: '#34d399', sublabel: 'OFF on Phone',
    prizes: [
      { value: '₹500 OFF', weight: 50 },
      { value: '₹1,000 OFF', weight: 35 },
      { value: '₹3,000 OFF', weight: 15 },
    ],
  },
  giftcard: {
    label: 'Gift Card', icon: '🎁', color: '#f472b6', sublabel: 'Gift Card',
    prizes: [
      { value: '$25', weight: 50 },
      { value: '$50', weight: 35 },
      { value: '$100', weight: 15 },
    ],
  },
};

export const getConfig = async (req, res) => {
  try {
    let config = await Config.findOne();
    if (!config) {
      config = await Config.create({ categories: defaultConfig });
    }
    res.json(Object.fromEntries(config.categories));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateConfig = async (req, res) => {
  try {
    let config = await Config.findOne();
    if (!config) {
      config = new Config();
    }
    config.categories = new Map(Object.entries(req.body));
    config.updatedAt = Date.now();
    await config.save();
    res.json(Object.fromEntries(config.categories));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};