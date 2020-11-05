const router = require("express").Router();
let notesData = require("../db/db.json");
const fs = require("fs");

router.get("/notes", function(req, res){
    res.json(notesData);
});