const db = require('../models');

exports.createCandidate = (data) => db.Candidate.create(data);

exports.getAllCandidates = () => db.Candidate.findAll();

exports.getCandidateById = (id) => db.Candidate.findByPk(id);

exports.updateCandidate = (id, data) => db.Candidate.update(data, { where: { id }, returning: true });

exports.deleteCandidate = (id) => db.Candidate.destroy({ where: { id } });
