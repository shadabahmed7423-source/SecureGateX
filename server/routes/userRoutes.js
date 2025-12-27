import express from 'express';
import { getAllUsers, updateUserRole } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', protect, getAllUsers);
router.put('/:id/role', protect, authorizeRoles('admin'), updateUserRole);

export default router;
