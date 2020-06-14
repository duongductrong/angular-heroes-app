const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
  Hero: [
    { id: 11, damage: 1, name: "Dr Nice" },
    { id: 12, damage: 1, name: "Narco" },
    { id: 13, damage: 1, name: "Bombasto" },
    { id: 14, damage: 1, name: "Celeritas" },
    { id: 15, damage: 1, name: "Magneta" },
    { id: 16, damage: 1, name: "RubberMan" },
    { id: 17, damage: 1, name: "Dynama" },
    { id: 18, damage: 1, name: "Dr IQ" },
    { id: 19, damage: 1, name: "Magma" },
    { id: 20, damage: 1, name: "Tornado" },
  ],
});

module.exports = db;
