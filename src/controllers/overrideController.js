import Override from '../models/Override.js';

export const getOverride = async (req, res) => {
  try {
    const override = await Override.findOne({ active: true });
    res.json(override);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const setOverride = async (req, res) => {
  try {
    // Deactivate all existing overrides
    await Override.updateMany({}, { active: false });
    
    if (req.body && req.body.categoryKey && req.body.prize) {
      // Create new override
      const override = await Override.create({
        categoryKey: req.body.categoryKey,
        prize: req.body.prize,
        active: true,
      });
      res.json(override);
    } else {
      // Just clear all overrides
      res.json(null);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};