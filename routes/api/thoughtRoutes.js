const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require('../../controllers/thoughtController.js');

// /api/
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

module.exports = router;
