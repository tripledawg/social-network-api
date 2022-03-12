const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
  addThought, 
  removeThought
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friend/:friendId').post(addFriend);

///api/users/:userId/
router.route('/:userId').put(updateUser);

// /api/users/:userId/friend/:friendId
router.route('/:userId/friend/:friendId').delete(removeFriend);

// /api/usesrs/:userId/thoughts
// TODO: make addThought route
// router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId
// TODO: make removeThought route
// router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
