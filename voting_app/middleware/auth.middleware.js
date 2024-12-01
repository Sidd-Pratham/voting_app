const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key'; // Replace with a secure key and use dotenv for production

exports.authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from Bearer scheme

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user info to the request object
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};
