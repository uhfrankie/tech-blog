/* import from express js */
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes")

/* define routes */
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);

module.exports = router;