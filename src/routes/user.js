
const {Router} = require("express");
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Users!');
});

router.get('/:userId', (req, res) => {
  res.send(`Hello User: ${req.params.userId}`);
});

module.exports = router;
