import { Request, Response } from 'express';
import { Group } from '../models/group.model';

// Create a new group
export const createGroup = async (req: Request, res: Response) => {
    try {
        const group = new Group(req.body);
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get group details by ID
export const getGroupById = async (req: Request, res: Response) => {
    try {
        const group = await Group.findById(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// List all members of a group
export const listGroupMembers = async (req: Request, res: Response) => {
    try {
        const group = await Group.findById(req.params.id).populate('members');
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json(group.members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Join a group via invite
export const joinGroup = async (req: Request, res: Response) => {
    try {
        const group = await Group.findById(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        group.members.push(req.body.userId);
        await group.save();
        res.status(200).json(group);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};