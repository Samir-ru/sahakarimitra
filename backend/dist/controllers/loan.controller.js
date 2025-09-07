"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordRepayment = exports.getLoansForMember = exports.rejectLoan = exports.approveLoan = exports.createLoan = void 0;
const loan_model_1 = require("../models/loan.model");
// Create a new loan request
const createLoan = async (req, res) => {
    try {
        const loanData = req.body;
        const newLoan = await loan_model_1.Loan.create(loanData);
        res.status(201).json(newLoan);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating loan', error });
    }
};
exports.createLoan = createLoan;
// Approve a loan request
const approveLoan = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await loan_model_1.Loan.findByPk(id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        loan.status = 'approved';
        await loan.save();
        res.status(200).json(loan);
    }
    catch (error) {
        res.status(500).json({ message: 'Error approving loan', error });
    }
};
exports.approveLoan = approveLoan;
// Reject a loan request
const rejectLoan = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await loan_model_1.Loan.findByPk(id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        loan.status = 'rejected';
        await loan.save();
        res.status(200).json(loan);
    }
    catch (error) {
        res.status(500).json({ message: 'Error rejecting loan', error });
    }
};
exports.rejectLoan = rejectLoan;
// Fetch loans for a specific member
const getLoansForMember = async (req, res) => {
    try {
        const { memberId } = req.params;
        const loans = await loan_model_1.Loan.findAll({ where: { memberId } });
        res.status(200).json(loans);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching loans', error });
    }
};
exports.getLoansForMember = getLoansForMember;
// Record a loan repayment
const recordRepayment = async (req, res) => {
    try {
        const { id } = req.params;
        const repaymentData = req.body;
        const loan = await loan_model_1.Loan.findByPk(id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        loan.repayments.push(repaymentData);
        await loan.save();
        res.status(200).json(loan);
    }
    catch (error) {
        res.status(500).json({ message: 'Error recording repayment', error });
    }
};
exports.recordRepayment = recordRepayment;
