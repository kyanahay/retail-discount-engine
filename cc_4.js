// Coding Challenge #4: Retail Discount Engine


// Step 2: Create an array of objects representing 5 products
const products = [
  { name: "Wireless Headphones", category: "electronics", price: 450, inventory: 8 },
  { name: "Graphic T-Shirt", category: "apparel", price: 120, inventory: 15 },
  { name: "Rice (5lb bag)", category: "groceries", price: 60, inventory: 20 },
  { name: "Dish Soap", category: "household", price: 35, inventory: 12 },
  { name: "Notebook", category: "stationery", price: 25, inventory: 30 }
];


// Step 3: Apply a dynamic discount based on category
for (const product of products) {
  let discountRate = 0;

  switch (product.category) {
    case "electronics":
      discountRate = 0.2; // 20% off
      break;
    case "apparel":
      discountRate = 0.15; // 15% off
      break;
    case "groceries":
    case "household":
      discountRate = 0.1; // 10% off
      break;
    default:
      discountRate = 0; // no discount
      break;
  }

  product.categoryDiscountRate = discountRate;
  product.discountedPrice = round2(product.price * (1 - discountRate));
}

console.log("=== Products after category discounts ===");
console.log(products);



// Step 4: Create a variable customerType and apply an additional discount
let customerType = "regular"; // change to "student" or "senior" to test

let extraDiscountRate = 0;
if (customerType === "student") {
  extraDiscountRate = 0.05;
} else if (customerType === "senior") {
  extraDiscountRate = 0.07;
} else {
  extraDiscountRate = 0;
}

console.log(`Customer type: ${customerType} | Extra discount rate: ${extraDiscountRate * 100}%`);



// Step 5: Simulate a checkout process for 3 customers
const carts = [
  // Customer 1 buys headphones + rice
  [
    { productName: "Wireless Headphones", qty: 1 },
    { productName: "Rice (5lb bag)", qty: 2 }
  ],
  // Customer 2 buys t-shirt + dish soap + notebook
  [
    { productName: "Graphic T-Shirt", qty: 2 },
    { productName: "Dish Soap", qty: 1 },
    { productName: "Notebook", qty: 3 }
  ],
  // Customer 3 buys rice + dish soap
  [
    { productName: "Rice (5lb bag)", qty: 1 },
    { productName: "Dish Soap", qty: 2 }
  ]
];

// Helper: find product by name
function findProductByName(name) {
  return products.find((p) => p.name === name);
}

console.log("=== Checkout Simulation ===");

for (let i = 0; i < 3; i++) {
  const customerNumber = i + 1;
  const cart = carts[i];

  let subtotal = 0;

  for (const item of cart) {
    const product = findProductByName(item.productName);

    if (!product) {
      console.log(`Customer ${customerNumber}: Product not found -> ${item.productName}`);
      continue;
    }

    // Check inventory before "selling"
    if (product.inventory < item.qty) {
      console.log(
        `Customer ${customerNumber}: Not enough inventory for ${product.name}. Requested ${item.qty}, available ${product.inventory}.`
      );
      continue;
    }

    // Add discounted line total
    const lineTotal = product.discountedPrice * item.qty;
    subtotal += lineTotal;

    // Reduce inventory count
    product.inventory -= item.qty;
  }

  // Apply extra discount to the subtotal
  const totalAfterExtraDiscount = round2(subtotal * (1 - extraDiscountRate));

  console.log(
    `Customer ${customerNumber} subtotal: $${round2(subtotal)} | total after extra discount: $${totalAfterExtraDiscount}`
  );
}



// Step 6: Log each key/value pair for a single product after discounts are applied.
console.log("=== for...in on a single product (after discounts + checkout) ===");
const sampleProduct = products[0]; // first product
for (const key in sampleProduct) {
  console.log(`${key}:`, sampleProduct[key]);
}




//Step 7: Log all product info after inventory is updated.
console.log("=== Object.entries() + destructuring for ALL products (final state) ===");
for (const product of products) {
  console.log(`--- ${product.name} ---`);
  for (const [key, value] of Object.entries(product)) {
    console.log(`${key}:`, value);
  }
}