const express = require('express');
const Recipes = require('../recipes/recipe-model');
const router = express.Router();

// GET /api/recipes/
router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no recipe returned from server', error });
    });
});

// GET /api/recipes/:id/
router.get('/:id', (req, res) => {
  const recipeID = req.params.id;

  Recipes.getIngredients(recipeID)
    .then(ingredient => {
      if (ingredient) {
        res.status(200).json(ingredient);
      } else {
        res.status(404).json({ message: 'Sorry, no recipe match that id' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no ingredients returned from server', error });
    });
});

// GET /api/recipes/:id/steps  (steps)
router.get('/:id/steps', (req, res) => {
  const stepID = req.params.id;

  Recipes.getInstructions(stepID)
    .then(step => {
      if (step) {
        res.status(200).json(step);
      } else {
        res.status(404).json({ message: 'Sorry, no steps match that id' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no ingredients returned from server', error });
    });
});

module.exports = router;
