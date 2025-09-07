Sure, here's the proposed content for the file `/sahakarimitra/sahakarimitra/backend/src/routes/group.routes.ts`:

import { Router } from 'express';
import { 
    createGroup, 
    getGroupDetails, 
    listGroupMembers, 
    joinGroup 
} from '../controllers/group.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Route to create a new group (admin only)
router.post('/', authMiddleware, createGroup);

// Route to get details of a specific group
router.get('/:id', getGroupDetails);

// Route to list members of a specific group
router.get('/:id/members', listGroupMembers);

// Route for a user to join a group via invite
router.post('/:id/join', authMiddleware, joinGroup);

export default router;