const db = require('../models');

exports.castVote = (userId, candidateId) => db.Vote.create({ UserId: userId, CandidateId: candidateId });

exports.getVotesByCandidate = (candidateId) =>
  db.Vote.findAll({ where: { CandidateId: candidateId }, include: db.User });

exports.getVotesByUser = (userId) =>
  db.Vote.findAll({ where: { UserId: userId }, include: db.Candidate });
