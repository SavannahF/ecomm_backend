const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll(
    // be sure to include its associated Product data
    {
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    })
      .then((tagData) => {
        res.json(tagData);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
    }
  ) 
});

// GET one tag
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne(
    {
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    })
    .then((tagData) => {
      if(!tagData) {
        res.status(404).json({message: 'No tag found with that id.'});
        return;
      }
      res.json(tagData);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    }
  )
  // be sure to include its associated Product data
});

// POST new tag
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(
    {
      tag_name: req.body.tag_name
    })
  .then((tagData) => {
    res.json(tagData);
  })
  .catch((err) => {
    res.json(err);
    console.log(err);
    }
  )
});

// PUT tag name
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id,
        }
    }
  )
  .then((updatedTag) => {
    if(!updatedTag) {
      res.status(404).json({message: 'No tag found with that id.'});
      return;
    }
    res.json(updatedTag);
  })
  .catch((err) => {
    res.json(err);
    console.log(err);
  });
});

// DELETE one tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((deletedTag) => {
    if(!deletedTag) {
      res.status(404).json({message: 'No tag found with that id.'});
      return;
    }
    res.json(deletedTag);
  })
  .catch((err) => {
    res.json(err);
    console.log(err);
  });
});

module.exports = router;
