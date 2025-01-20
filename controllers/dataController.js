import Data from '../models/Data.js';

export const createData = async (req, res) => {
  const { title, content } = req.body;
  try {
    const data = new Data({ title, content, createdBy: req.user.id });
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create data', details: err.message });
  }
};

export const getData = async (req, res) => {
  try {
    const data = await Data.find({ createdBy: req.user.id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data', details: err.message });
  }
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const data = await Data.findOneAndUpdate(
      { _id: id, createdBy: req.user.id },
      { title, content },
      { new: true }
    );
    if (!data) return res.status(404).json({ error: 'Data not found or unauthorized' });
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update data', details: err.message });
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Data.findOneAndDelete({ _id: id, createdBy: req.user.id });
    if (!data) return res.status(404).json({ error: 'Data not found or unauthorized' });
    res.json({ message: 'Data deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete data', details: err.message });
  }
};
