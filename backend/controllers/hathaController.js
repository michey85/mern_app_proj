import { hatha } from '../data/index.js';
import { filterBySearch, filterByCategory, sortAbc, sortDec } from '../helpers/index.js';

export const hathaRoot = (req, res) => {
  if (!Object.keys(req.query).length) return res.json(hatha);

  let data = hatha;
  const { search, category, sort, _limit } = req.query;

  if (search) {
    data = data.filter(asana => filterBySearch(asana.name, search));
  }

  if (category) {
    data = data.filter(asana => filterByCategory(asana.category, category));
  }

  if (sort) {
    const sortAlg = sort === 'dec' ? sortDec : sortAbc;
    data.sort((a, b) => sortAlg(a.name, b.name));
  }

  if (_limit) {
    data = data.slice(0, Number(_limit));
  }

  res.json(data);
};

export const hathaByName = (req, res) => {
  const asana = hatha.find(a => a.name.toLowerCase() === req.params.name.toLowerCase());

  if (asana) res.json(asana);
  else res.status(404).json({ error: 'No such asana' });
};

// TODO: add different logic for MongoDB
// TODO: add private logic with token
export const createAsana = (req, res) => {
  console.log(req.body);
  const { name, desc, category = [] } = req.body;

  if (!name || !desc) return res.status(500).json({ err: 'Name and Description are required' });

  if (!category || !Array.isArray(category)) return res.status(500).json({ err: 'Category should be an array' });

  // Add item and return new value to the client
  const data = { id: Date.now(), name, desc, category };
  res.json(data);
};
