import Session from '../models/Session.js';

export const logSession = async (req, res) => {
  try {
    const session = await Session.create({
      ...req.body,
      ip: req.ip,
      userAgent: req.get('user-agent'),
    });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find().sort({ timestamp: -1 }).limit(100);
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};