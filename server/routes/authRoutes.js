import express from 'express';

const router = express.Router();
import { registerUser, loginUser, getProfile, refreshToken, logoutUser } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.post('/refresh-token', refreshToken);
router.post('/logout', logoutUser);

export default router;