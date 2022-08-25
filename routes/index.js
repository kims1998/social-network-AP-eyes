const router = require("express").Router();

const apiRoutes = require("./api");


router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h2> 404 An Error has occurred!</h2>");
});

module.exports = router;