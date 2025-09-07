import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateUser = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateGroup = [
    body('name').notEmpty().withMessage('Group name is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('min_monthly_installment').isNumeric().withMessage('Minimum monthly installment must be a number'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateContribution = [
    body('amount').isNumeric().withMessage('Amount must be a number'),
    body('mode').notEmpty().withMessage('Mode is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateLoan = [
    body('principal').isNumeric().withMessage('Principal must be a number'),
    body('interest_rate').isNumeric().withMessage('Interest rate must be a number'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];