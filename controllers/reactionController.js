const { Reactionss, User } = require('../models');

module.exports = {
  // Get all reactionss
  getReactionss(req, res) {
    Reactionss.find()
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(500).json(err));
  },
  // Get a reaction
  getSinglereaction(req, res) {
    Reactions.findOne({ _id: req.params.reactionId })
      .select('-__v')
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a reaction 
  createReaction(req, res) {
    Reactions.create(req.body)
      .then((reaction) => res.json(reaction))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a reaction
  deleteReaction(req, res) {
    Reactions.findOneAndDelete({ _id: req.params.reactionId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : Reactions.deleteMany({ _id: { $in: reaction.user } })
      )
      .catch((err) => res.status(500).json(err));
  }
}