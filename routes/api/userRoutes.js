const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  addThought, 
  removeThought
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/usesrs/:userId/friends
router.route('/:userId/friend').post(addFriend);

// /api/users/:userId/friend/:friendId
router.route('/:userId/friend/:friendId').delete(removeFriend);

// /api/usesrs/:userId/thoughts
// TODO: make addThought route
// router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId
// TODO: make removeThought route
// router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
