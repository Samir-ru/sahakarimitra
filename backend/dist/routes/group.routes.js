"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Sure, here;
's the proposed content for the file `/sahakarimitra/sahakarimitra/backend/src/routes/group.routes.ts`:;
const express_1 = require("express");
const group_controller_1 = require("../controllers/group.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// Route to create a new group (admin only)
router.post('/', auth_middleware_1.authMiddleware, group_controller_1.createGroup);
// Route to get details of a specific group
router.get('/:id', group_controller_1.getGroupDetails);
// Route to list members of a specific group
router.get('/:id/members', group_controller_1.listGroupMembers);
// Route for a user to join a group via invite
router.post('/:id/join', auth_middleware_1.authMiddleware, group_controller_1.joinGroup);
exports.default = router;
