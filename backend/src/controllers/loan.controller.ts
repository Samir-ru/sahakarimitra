import { Request, Response } from 'express';
import { Loan } from '../models/loan.model';

// Create a new loan request
export const createLoan = async (req: Request, res: Response) => {
    try {
        const loanData = req.body;
        const newLoan = await Loan.create(loanData);
        res.status(201).json(newLoan);
    } catch (error) {
        res.status(500).json({ message: 'Error creating loan', error });
    }
};

// Approve a loan request
export const approveLoan = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const loan = await Loan.findByPk(id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        loan.status = 'approved';
        await loan.save();
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Error approving loan', error });
    }
};

// Reject a loan request
export const rejectLoan = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const loan = await Loan.findByPk(id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        loan.status = 'rejected';
        await loan.save();
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Error rejecting loan', error });
    }
};

// Fetch loans for a specific member
export const getLoansForMember = async (req: Request, res: Response) => {
    try {
        const { memberId } = req.params;
        const loans = await Loan.findAll({ where: { memberId } });
        res.status(200).json(loans);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching loans', error });
    }
};

// Record a loan repayment
export const recordRepayment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const repaymentData = req.body;
        const loan = await Loan.findByPk(id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        loan.repayments.push(repaymentData);
        await loan.save();
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Error recording repayment', error });
    }
};