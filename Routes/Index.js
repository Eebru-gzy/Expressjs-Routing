const express = require("express");

const router = express.Router();

const ShoppingList = [];
let id = 0;

router
  .route("")
  .get((req, res) => res.json(ShoppingList))
  .post((req, res) => {
    ShoppingList.push({
      name: req.body.name,
      price: req.body.price,
      id: ++id,
    });
    return res.json({ message: "Shopping item created" });
  });

router
  .route("/:id")
  .get((req, res) => {
    const user = ShoppingList.find((item) => item.id === +req.params.id);
    return res.json(user);
  })
  .patch((req, res) => {
    const user = ShoppingList.find((item) => item.id === +req.params.id);
    user.name = req.body.name;
    user.price = req.body.price;
    return res.json({ message: "Shopping item Updated" });
  })
  .delete((req, res) => {
    const userIndex = ShoppingList.findIndex((item) => item.id === +req.params.id);
    ShoppingList.splice(userIndex, 1);
    return res.json({ message: "Shop item Deleted" });
  });



module.exports = router;
