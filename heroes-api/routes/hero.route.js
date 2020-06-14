const express = require("express");
const router = express.Router();

const AuthValidate = require("../validate/authenticate.validate");

const db = require("../db.config");

router.get("/", (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      msg: "Got",
      heroes: db.get("Hero").value(),
    });
  }, 200);
});

router.get("/:id", (req, res) => {
  let hero = db
    .get("Hero")
    .find({ id: Number(req.params.id) })
    .value();

  if (!hero) {
    res.status(400).json({
      msg: "Not found this hero",
    });
    return;
  }

  console.log(hero);

  res.status(200).json({
    msg: "Got",
    hero: hero,
  });
});

router.post("/", AuthValidate.isAuthenticate, (req, res) => {
  const { name, damage } = req.body;

  if (!name || !damage) {
    res.status(400).json({
      msg: "Không được để trống name or damage",
    });
    return;
  }

  const id = Math.max(...db.get("Hero").map((hero) => hero.id)) + 1;

  db.get("Hero").push({ id, name, damage }).write();

  res.status(200).json({
    msg: "Created",
    hero: {
      id,
      name,
      damage,
    },
  });
});

router.put("/:id", AuthValidate.isAuthenticate, (req, res) => {
  const { id } = req.params;
  const { name, damage } = req.body;

  let hero = db
    .get("Hero")
    .find({ id: Number(id) })
    .value();

  if (!hero) {
    res.status(404).json({
      msg: "Not found hero",
    });
    return;
  }

  const heroUpdate = { id: Number(id), name, damage };

  let heroes = db.get("Hero").value();
  let index = heroes.findIndex((el) => el.id === Number(id));

  heroes.fill(heroUpdate, index, index + 1);

  db.get("Hero").set(heroes).write();

  res.status(200).json({
    msg: "Updated",
    hero: heroUpdate,
  });
});

router.delete("/:id", AuthValidate.isAuthenticate, (req, res) => {
  const { id } = req.params;

  let hero = db
    .get("Hero")
    .find({ id: Number(id) })
    .value();

  if (!hero) {
    res.status(404).json({
      msg: "Not found hero",
    });
    return;
  }

  db.get("Hero").remove({ id: hero.id }).write();

  res.status(200).json({
    msg: "Deleted",
  });
});

module.exports = router;
