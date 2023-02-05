const router = require('express').Router();
const { RESERVED } = require('mysql2/lib/constants/client');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attribute: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(TagDB => res.json(TagDB))
  .catch(err => {
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [
    {
      model: Product,
      attribute: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  ]
  })
  .then(TagDB => {
    if(!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create ({
    tag_name: req.body.tag_name,
  })
  .then(TagDB => res.json(TagDB))
  .catch(err => {
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(TagDB => {
    if(!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy ({
    where: {
      id: req.params.id
    }
  })
  .then(TagDB => {
    if(!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

module.exports = router;
