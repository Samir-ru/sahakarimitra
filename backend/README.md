# SahakariMitra - Group Savings and Loan Management System

## Overview
SahakariMitra is a fullstack application designed to digitize community savings groups (Bachat Samuha/Sahakari). It allows users to manage contributions, loans, repayments, and transactions efficiently.

## Technologies Used
- **Frontend**: Flutter
- **Backend**: Node.js with Express.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: Firebase Authentication
- **State Management**: Riverpod
- **API Client**: Dio or http

## Features
### Frontend
- User authentication (Login/Signup)
- Admin functionalities:
  - Create and manage groups
  - Dashboard for group statistics
  - Manage group members
- Member functionalities:
  - View contributions and loans
  - Request loans
  - Notifications and settings

### Backend
- RESTful API endpoints for:
  - User authentication
  - Group management
  - Contribution logging
  - Loan management
- Scheduled tasks for reminders and notifications
- Secure file uploads and data validation

## Getting Started
### Prerequisites
- Node.js
- MySQL
- Flutter SDK

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd sahakarimitra/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up the database and update the configuration files in `src/config/database.ts` and `src/config/firebase.ts`.
5. Start the backend server:
   ```
   npm start
   ```

### Running the Frontend
1. Navigate to the frontend directory:
   ```
   cd sahakarimitra/frontend
   ```
2. Install dependencies:
   ```
   flutter pub get
   ```
3. Run the Flutter application:
   ```
   flutter run
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.