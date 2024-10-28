import express from 'express';
import contactPortfolio from './controllers/portfolio.js';

const router = express.Router();

router.post('/contact', contactPortfolio);

export default router;
