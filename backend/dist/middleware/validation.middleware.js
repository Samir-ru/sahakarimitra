"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoan = exports.validateContribution = exports.validateGroup = exports.validateUser = void 0;
const express_validator_1 = require("express-validator");
exports.validateUser = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.body)('phone').notEmpty().withMessage('Phone number is required'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
exports.validateGroup = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('Group name is required'),
    (0, express_validator_1.body)('location').notEmpty().withMessage('Location is required'),
    (0, express_validator_1.body)('min_monthly_installment').isNumeric().withMessage('Minimum monthly installment must be a number'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
exports.validateContribution = [
    (0, express_validator_1.body)('amount').isNumeric().withMessage('Amount must be a number'),
    (0, express_validator_1.body)('mode').notEmpty().withMessage('Mode is required'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
exports.validateLoan = [
    (0, express_validator_1.body)('principal').isNumeric().withMessage('Principal must be a number'),
    (0, express_validator_1.body)('interest_rate').isNumeric().withMessage('Interest rate must be a number'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
