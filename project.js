const data=[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 25.99,
    "discount": 5,
    "rating": 4.3,
    "inStock": true,
    "tags": ["computer", "mouse", "wireless"],
    "variants": [
      { "color": "Black", "quantity": 25 },
      { "color": "White", "quantity": 10 }
    ]
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 89.99,
    "discount": 10,
    "rating": 4.7,
    "inStock": false,
    "tags": ["keyboard", "mechanical", "rgb"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Gray", "quantity": 5 }
    ]
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "category": "Fashion",
    "price": 59.5,
    "discount": 15,
    "rating": 4.1,
    "inStock": true,
    "tags": ["shoes", "sports", "running"],
    "variants": [
      { "color": "Blue", "quantity": 15 },
      { "color": "Red", "quantity": 7 }
    ]
  },
  {
    "id": 4,
    "name": "Cotton Hoodie",
    "category": "Fashion",
    "price": 35.0,
    "discount": 0,
    "rating": 4.0,
    "inStock": false,
    "tags": ["hoodie", "cotton", "winter"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Green", "quantity": 2 }
    ]
  },
  {
    "id": 5,
    "name": "Smart Watch",
    "category": "Electronics",
    "price": 149.99,
    "discount": 20,
    "rating": 4.8,
    "inStock": true,
    "tags": ["watch", "smart", "fitness"],
    "variants": [
      { "color": "Black", "quantity": 30 },
      { "color": "Pink", "quantity": 12 }
    ]
  }
]

 //1. search by  product name

const watch = data.filter(n=>n.name==="Smart Watch");
console.log(watch);

//// 2. Check if any product out of stock
const product = data.some(n=>n.inStock==false);
console.log(product);

// 3. Check if all electronics > $20
const greaterThan20 = data.some(n=>n.price>20);
console.log(greaterThan20);

// 4. sort by price
const sorted = data.sort((item1,item2)=>item1.price-item2.price);
console.log(sorted);

// 4. sort by rating
const sortedRating = data.sort((item1,item2)=>item2.rating-item1.rating);
console.log(sortedRating);

//// 6. find total stock 
const totalStock =  data.reduce(function(count,item){
    if(item.inStock===true){
        count++;

    }
    return count;
},0)               
console.log(totalStock);     

// // 7. Remove or insert products
data.push([
   {
    "id": 5,
    "name": "Cotton Hoodie",
    "category": "Fashion",
    "price": 35.0,
    "discount": 0,
    "rating": 4.0,
    "inStock": false,
    "tags": ["hoodie", "cotton", "winter"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Green", "quantity": 2 }
    ]
  }
])