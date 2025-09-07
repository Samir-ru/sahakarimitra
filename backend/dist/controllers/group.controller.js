"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinGroup = exports.listGroupMembers = exports.getGroupById = exports.createGroup = void 0;
const group_model_1 = require("../models/group.model");
// Create a new group
const createGroup = async (req, res) => {
    try {
        const group = new group_model_1.Group(req.body);
        await group.save();
        res.status(201).json(group);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createGroup = createGroup;
// Get group details by ID
const getGroupById = async (req, res) => {
    try {
        const group = await group_model_1.Group.findById(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json(group);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getGroupById = getGroupById;
// List all members of a group
const listGroupMembers = async (req, res) => {
    try {
        const group = await group_model_1.Group.findById(req.params.id).populate('members');
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json(group.members);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.listGroupMembers = listGroupMembers;
// Join a group via invite
const joinGroup = async (req, res) => {
    try {
        const group = await group_model_1.Group.findById(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        group.members.push(req.body.userId);
        await group.save();
        res.status(200).json(group);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.joinGroup = joinGroup;
