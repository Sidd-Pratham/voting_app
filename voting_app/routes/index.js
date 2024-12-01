const express = require('express');

const userRoutes = require('./user.routes');
const candidateRoutes = require('./candidate.routes');
const voteRoutes = require('./vote.routes');
const authRoutes = require('./auth.routes'); // Import auth routes

const router = express.Router();

router.use('/users', userRoutes);
router.use('/candidates', candidateRoutes);
router.use('/votes', voteRoutes);

module.exports = router;
