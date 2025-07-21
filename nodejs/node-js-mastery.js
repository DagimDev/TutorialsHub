// Initialize advanced Node project
const packageJson = {
  name: "advanced-node",
  type: "module", // Using ES modules
  engines: { node: ">=18.0.0" }
};
console.log("Project initialized for Node", process.versions.node);

// Add config loader with dotenv
import 'dotenv/config'; // npm install dotenv
console.log("DB URL:", process.env.DB_URL?.slice(0, 15) + "...");

// Implement async error handling
const asyncHandler = (fn) => (req, res, next) => 
  Promise.resolve(fn(req, res, next)).catch(next);

// Create custom logger with Winston
import winston from 'winston';
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [new winston.transports.Console()]
});
