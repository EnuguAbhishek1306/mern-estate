import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// Your routes in user.route.js (assuming it exists in the correct path)
router.get('/test',test);

export default router;