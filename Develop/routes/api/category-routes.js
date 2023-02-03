const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attribute: ['id', 'product_name', 'price', 'stock', 'catgeory']
      }
    ]
  })
  .then(CategoryDB => res.json(CategoryDB))
  .catch(err =>{
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attribute: ['id', 'product_name', 'price', 'stock', 'catgeory']
      }
    ]
  })
  .then(CategoryDB => {
    if(!CategoryDB) {
      res.status(404).json(err);
      return;
    }
    res.json(CategoryDB)
  })
  .catch(err =>{
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.params.category_name
  })
  .then(CategoryDB => res.json(CategoryDB))
  .catch(err =>{
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where: {
      id: req.params.id
    }
  })
  .then(CategoryDB => {
    if(!CategoryDB) {
      res.status(404).json(err);
      return;
    }
    res.json(CategoryDB)
  })
  .catch(err =>{
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({
    where: {
      id: req.params.id
    }
  })
  .then(CategoryDB => {
    if(!CategoryDB) {
      res.status(404).json(err);
      return;
    }
    res.json(CategoryDB)
  })
  .catch(err =>{
    res.status(500).json(err);
  })
});

module.exports = router;
