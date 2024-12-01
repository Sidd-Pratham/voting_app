const voteService = require('../services/vote.service');

exports.castVote = async (req, res) => {
  try {
    const vote = await voteService.castVote(req.user.id, req.body.candidateId);
    res.status(201).json({ message: 'Vote cast successfully', vote });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getVotesByCandidate = async (req, res) => {
  try {
    const votes = await voteService.getVotesByCandidate(req.params.candidateId);
    res.status(200).json(votes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getVotesByUser = async (req, res) => {
  try {
    const votes = await voteService.getVotesByUser(req.user.id);
    res.status(200).json(votes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
