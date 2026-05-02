# Retail Discount Engine

## Description
This project is a retail discount engine built using JavaScript. It simulates how a store applies category-based discounts, additional customer discounts, and processes purchases while updating inventory.

The goal of this project is to demonstrate working with arrays, objects, loops, conditionals, and real-world business logic.

## Features
- Applies discounts based on product category  
- Applies additional discounts based on customer type  
- Simulates a checkout process for multiple customers  
- Validates inventory before completing purchases  
- Updates inventory after each transaction  
- Calculates subtotals and final totals  
- Displays product details and final inventory  

## Technologies Used
- JavaScript  

## Data Structure

### Products
Each product includes:
- `name`  
- `category`  
- `price`  
- `inventory`  
- `categoryDiscountRate` (calculated)  
- `discountedPrice` (calculated)  

### Carts
Represents multiple customers, where each cart contains:
- `productName`  
- `qty` (quantity purchased)  

## Discount Logic

### Category Discounts
- Electronics → 20%  
- Apparel → 15%  
- Groceries & Household → 10%  
- Other → 0%  

### Customer Discounts
- Student → 5%  
- Senior → 7%  
- Regular → 0%  

## Key Functions

### `findProductByName(name)`
Finds a product from the product list using its name.

## How It Works
1. Products are initialized with price and inventory.  
2. Category-based discounts are applied to each product.  
3. A customer type is selected and an additional discount is set.  
4. Multiple customer carts are processed:
   - Inventory is checked before purchase  
   - Line totals are calculated using discounted prices  
   - Inventory is updated after purchase  
5. Subtotals and final totals are displayed.  
6. Final product data and inventory levels are logged.  

## How to Run
1. Copy the code into a `.js` file (e.g., `discountEngine.js`)  
2. Run using Node.js: node discountEngine.js

OR run in a browser console  

## Concepts Demonstrated
- Arrays and objects  
- Loops (`for`, `for...of`)  
- Conditional logic (`if`, `switch`)  
- Functions and modular logic  
- Data manipulation and updates  
- Inventory management logic  
- Number formatting  

## Notes
- Inventory is reduced after each purchase  
- Products cannot be sold if inventory is insufficient  
- Discounts are applied in two stages (category + customer)  
- Output is displayed in the console  

## Author
Kyana Hay
