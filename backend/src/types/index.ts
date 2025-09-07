export interface User {
    uid: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
}

export interface Group {
    id: string;
    name: string;
    location: string;
    minMonthlyInstallment: number;
    createdBy: string;
    loanMembersOnly: boolean;
    createdAt: Date;
}

export interface Member {
    id: string;
    userUid: string;
    groupId: string;
    role: string;
    joinDate: Date;
    dueAmount: number;
}

export interface Contribution {
    id: string;
    memberId: string;
    amount: number;
    monthYear: string;
    mode: string;
    receiptUrl: string;
    createdAt: Date;
}

export interface Transaction {
    id: string;
    groupId: string;
    memberId: string;
    type: string;
    amount: number;
    description: string;
    transactionDate: Date;
}

export interface Loan {
    id: string;
    memberId: string;
    groupId: string;
    principal: number;
    interestRate: number;
    minInstallment: number;
    dueDate: Date;
    status: string;
    createdAt: Date;
}

export interface LoanRepayment {
    id: string;
    loanId: string;
    amountPaid: number;
    paymentDate: Date;
}