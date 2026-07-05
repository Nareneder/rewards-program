# Customer Rewards Program

A React app that calculates reward points for customers based on their transactions. The app fetches data from a test API, calculates monthly and total reward points, and displays the results.

## Technologies

- React
- Vite
- JavaScript
- Jest

## Reward Rules

- 1 point for each dollar spent between $50 to $100.
- 2 points for each dollar spent over $100.
- Decimal amounts are round of before calculating points (e.g. $100.90 = $100)

Example:
- $120 purchase = 90 points
- $50–$100 → 50 points
- Above $100 ($20) → 40 points

## Getting Started

Run below commands squencially:
- git clone https://github.com/Nareneder/rewards-program.git
- cd rewards-program
- npm install
- npm run dev

- app run on this port: http://localhost:5173

For running test cases:
npm test

## Folder Structure
src/ 
 -api/ 
 -components/ 
 -utils/ 
 -App.jsx
 -App.test.js 

## What's Included

- Test API with loading state
- Monthly and total reward calculations
- Error Boundary
- Unit tests
