var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    var list = ["item1.itemNumber", "item2.itemNumber", "item3.itemNumber", "item4.itemNumber"];
    res.json(list);
    console.log('Sent list of items');
});
module.exports = router;