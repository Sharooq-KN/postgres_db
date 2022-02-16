const {Router} = require("express");
const router = Router();
const userControllers = require("./controllers")

router.post('/', userControllers.createUser);
router.get('/', userControllers.findAllUsers);
router.get('/:id', userControllers.findUserById);
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUserById);

module.exports = router;
