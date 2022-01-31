const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Leotards' },
    { name: 'Lyrical Dresses' },
    { name: 'Tutu Dresses' },
    { name: 'Skirts/Tutus' },
    { name: 'Shoes' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
  {
    name: 'Blue/Black Leotard',
    image: 'blue-black-leotard.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Blue/Black Leotard',
    image: 'blue-black-leotard.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 14 
  },
  {
    name: 'Blue/Black Leotard',
    image: 'blue-black-leotard.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Blue Short Sleeve Leotard',
    image: 'blue-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 8
  },
  {
    name: 'Blue Short Sleeve Leotard',
    image: 'blue-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 7
  },
  {
    name: 'Blue Short Sleeve Leotard',
    image: 'blue-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 10
  },
  {
    name: 'White Short Sleeve Leotard',
    image: 'white-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'White Short Sleeve Leotard',
    image: 'white-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'White Short Sleeve Leotard',
    image: 'white-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 14
  },
  {
    name: 'Black Short Sleeve Leotard',
    image: 'black-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 10
  },
  {
    name: 'Black Short Sleeve Leotard',
    image: 'black-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Black Short Sleeve Leotard',
    image: 'black-short-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Pink Long Sleeve Leotard',
    image: 'pink-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Pink Long Sleeve Leotard',
    image: 'pink-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Pink Long Sleeve Leotard',
    image: 'pink-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 14
  },
  {
    name: 'Black Long Sleeve Leotard',
    image: 'black-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 13
  },
  {
    name: 'Black Long Sleeve Leotard',
    image: 'black-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Black Long Sleeve Leotard',
    image: 'black-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'White Long Sleeve Leotard',
    image: 'white-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'White Long Sleeve Leotard',
    image: 'white-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 15
  },
  {
    name: 'White Long Sleeve Leotard',
    image: 'white-long-sleeve-leotard.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Black Biketard',
    image: 'black-biketard-revised.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Black Biketard',
    image: 'black-biketard-revised.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Black Biketard',
    image: 'black-biketard-revised.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 14
  },
  {
    name: 'Leopard Biketard',
    image: 'leopard-biketard-revised.png',
    category: categories[0]._id,
    size: 'S',
    quantity: 14
  },
  {
    name: 'Leopard Biketard',
    image: 'leopard-biketard-revised.png',
    category: categories[0]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Leopard Biketard',
    image: 'leopard-biketard-revised.png',
    category: categories[0]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Light Blue Dress',
    image: 'light-blue-dress.png',
    category: categories[1]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Light Blue Dress',
    image: 'light-blue-dress.png',
    category: categories[1]._id,
    size: 'M',
    quantity: 13
  },
  {
    name: 'Light Blue Dress',
    image: 'light-blue-dress.png',
    category: categories[1]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Teal Dress',
    image: 'teal-dress-revised.png',
    category: categories[1]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Teal Dress',
    image: 'teal-dress-revised.png',
    category: categories[1]._id,
    size: 'M',
    quantity: 14
  },
  {
    name: 'Teal Dress',
    image: 'teal-dress-revised.png',
    category: categories[1]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Black Dress',
    image: 'black-dress-revised.png',
    category: categories[1]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Black Dress',
    image: 'black-dress-revised.png',
    category: categories[1]._id,
    size: 'M',
    quantity: 13
  },
  {
    name: 'Black Dress',
    image: 'black-dress-revised.png',
    category: categories[1]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Pink Dress',
    image: 'pink-dress-revised.png',
    category: categories[1]._id,
    size: 'S',
    quantity: 13
  },
  {
    name: 'Pink Dress',
    image: 'pink-dress-revised.png',
    category: categories[1]._id,
    size: 'M',
    quantity: 13
  },
  {
    name: 'Pink Dress',
    image: 'pink-dress-revised.png',
    category: categories[1]._id,
    size: 'L',
    quantity: 14
  },
  {
    name: 'Navy Dress',
    image: 'navy-dress-revised.png',
    category: categories[1]._id,
    size: 'S',
    quantity: 13
  },
  {
    name: 'Navy Dress',
    image: 'navy-dress-revised.png',
    category: categories[1]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Navy Dress',
    image: 'navy-dress-revised.png',
    category: categories[1]._id,
    size: 'L',
    quantity: 14
  },
  {
    name: 'Black/Gold Dress',
    image: 'black-gold-dress.png',
    category: categories[1]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Black/Gold Dress',
    image: 'black-gold-dress.png',
    category: categories[1]._id,
    size: 'M',
    quantity: 13
  },
  {
    name: 'Black/Gold Dress',
    image: 'black-gold-dress.png',
    category: categories[1]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Champagne Dress',
    image: 'champagne-dress.png',
    category: categories[1]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Champagne Dress',
    image: 'champagne-dress.png',
    category: categories[1]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Champagne Dress',
    image: 'champagne-dress.png',
    category: categories[1]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Maroon Dress',
    image: 'maroon-dress.png',
    category: categories[1]._id,
    size: 'S',
    quantity: 10
  },
  {
    name: 'Maroon Dress',
    image: 'maroon-dress.png',
    category: categories[1]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Maroon Dress',
    image: 'maroon-dress.png',
    category: categories[1]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Pink/Gold Tutu Dress',
    image: 'pink-gold-tutu-dress.png',
    category: categories[2]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Pink/Gold Tutu Dress',
    image: 'pink-gold-tutu-dress.png',
    category: categories[2]._id,
    size: 'M',
    quantity: 13
  },
  {
    name: 'Pink/Gold Tutu Dress',
    image: 'pink-gold-tutu-dress.png',
    category: categories[2]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Royal Blue Tutu Dress',
    image: 'royal-blue-tutu-dress.png',
    category: categories[2]._id,
    size: 'S',
    quantity: 11
  },
  {
    name: 'Royal Blue Tutu Dress',
    image: 'royal-blue-tutu-dress.png',
    category: categories[2]._id,
    size: 'M',
    quantity: 10
  },
  {
    name: 'Royal Blue Tutu Dress',
    image: 'royal-blue-tutu-dress.png',
    category: categories[2]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Aqua Tutu Dress',
    image: 'aqua-tutu-dress.png',
    category: categories[2]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Aqua Tutu Dress',
    image: 'aqua-tutu-dress.png',
    category: categories[2]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Aqua Tutu Dress',
    image: 'aqua-tutu-dress.png',
    category: categories[2]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Pink Tutu Dress',
    image: 'pink-tutu-dress.png',
    category: categories[2]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Pink Tutu Dress',
    image: 'pink-tutu-dress.png',
    category: categories[2]._id,
    size: 'M',
    quantity: 11
  },
  {
    name: 'Pink Tutu Dress',
    image: 'pink-tutu-dress.png',
    category: categories[2]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Light Blue Tutu Dress',
    image: 'light-blue-tutu-dress.png',
    category: categories[2]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Light Blue Tutu Dress',
    image: 'light-blue-tutu-dress.png',
    category: categories[2]._id,
    size: 'M',
    quantity: 10
  },
  {
    name: 'Light Blue Tutu Dress',
    image: 'light-blue-tutu-dress.png',
    category: categories[2]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Blue Tutu',
    image: 'blue-tutu.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 10
  },
  {
    name: 'Blue Tutu',
    image: 'blue-tutu.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Blue Tutu',
    image: 'blue-tutu.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Pink Tutu',
    image: 'pink-tutu.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Pink Tutu',
    image: 'pink-tutu.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Pink Tutu',
    image: 'pink-tutu.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Purple Tutu',
    image: 'purple-tutu.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 13
  },
  {
    name: 'Purple Tutu',
    image: 'purple-tutu.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Purple Tutu',
    image: 'purple-tutu.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Blue/Purple Tutu',
    image: 'blue-purple-tutu.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Blue/Purple Tutu',
    image: 'blue-purple-tutu.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 11
  },
  {
    name: 'Blue/Purple Tutu',
    image: 'blue-purple-tutu.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Gold Glitter Tutu',
    image: 'gold-tutu.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 10
  },
  {
    name: 'Gold Glitter Tutu',
    image: 'gold-tutu.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 11
  },
  {
    name: 'Gold Glitter Tutu',
    image: 'gold-tutu.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Silver Glitter Tutu',
    image: 'silver-tutu.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Silver Glitter Tutu',
    image: 'silver-tutu.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Silver Glitter Tutu',
    image: 'silver-tutu.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'White Long Chiffon Skirt',
    image: 'white-long-skirt.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 11
  },
  {
    name: 'White Long Chiffon Skirt',
    image: 'white-long-skirt.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'White Long Chiffon Skirt',
    image: 'white-long-skirt.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Black Long Chiffon Skirt',
    image: 'black-long-skirt.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Black Long Chiffon Skirt',
    image: 'black-long-skirt.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 11
  },
  {
    name: 'Black Long Chiffon Skirt',
    image: 'black-long-skirt.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Maroon Long Chiffon Skirt',
    image: 'maroon-long-skirt.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Maroon Long Chiffon Skirt',
    image: 'maroon-long-skirt.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 13
  },
  {
    name: 'Maroon Long Chiffon Skirt',
    image: 'maroon-long-skirt.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'White Skirt',
    image: 'white-skirt.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 11
  },
  {
    name: 'White Skirt',
    image: 'white-skirt.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'White Skirt',
    image: 'white-skirt.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Blue Skirt',
    image: 'blue-skirt.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Blue Skirt',
    image: 'blue-skirt.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 11
  },
  {
    name: 'Blue Skirt',
    image: 'blue-skirt.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Black Skirt',
    image: 'black-skirt.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 11
  },
  {
    name: 'Black Skirt',
    image: 'black-skirt.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Black Skirt',
    image: 'black-skirt.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Pink Skirt',
    image: 'pink-skirt.png',
    category: categories[3]._id,
    size: 'S',
    quantity: 13
  },
  {
    name: 'Pink Skirt',
    image: 'pink-skirt.png',
    category: categories[3]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Pink Skirt',
    image: 'pink-skirt.png',
    category: categories[3]._id,
    size: 'L',
    quantity: 13
  },
  {
    name: 'Pink Ballet Slippers',
    image: 'pink-ballet-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Pink Ballet Slippers',
    image: 'pink-ballet-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 11
  },
  {
    name: 'Pink Ballet Slippers',
    image: 'pink-ballet-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 10
  },
  {
    name: 'Black Ballet Slippers',
    image: 'black-ballet-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Black Ballet Slippers',
    image: 'black-ballet-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 11
  },
  {
    name: 'Black Ballet Slippers',
    image: 'black-ballet-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 10
  },
  {
    name: 'Red Toe Shoes',
    image: 'red-shoes-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Red Toe Shoes',
    image: 'red-shoes-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 13
  },
  {
    name: 'Red Toe Shoes',
    image: 'red-shoes-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Pink Toe Shoes',
    image: 'pink-toe-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 10
  },
  {
    name: 'Pink Toe Shoes',
    image: 'pink-toe-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Pink Toe Shoes',
    image: 'pink-toe-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Black Toe Shoes',
    image: 'black-toe-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 11
  },
  {
    name: 'Black Toe Shoes',
    image: 'black-toe-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Black Toe Shoes',
    image: 'black-toe-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'White Tap Shoes',
    image: 'white-tap-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 13
  },
  {
    name: 'White Tap Shoes',
    image: 'white-tap-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'White Tap Shoes',
    image: 'white-tap-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Tan Tap Shoes',
    image: 'tan-tap-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 13
  },
  {
    name: 'Tan Tap Shoes',
    image: 'tan-tap-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Tan Tap Shoes',
    image: 'tan-tap-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 11
  },
  {
    name: 'Black Tap Shoes',
    image: 'black-tap-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 12
  },
  {
    name: 'Black Tap Shoes',
    image: 'black-tap-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Black Tap Shoes',
    image: 'black-tap-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 12
  },
  {
    name: 'Tan Jazz Shoes',
    image: 'tan-jazz-revised.png',
    category: categories[4]._id,
    size: 'S',
    quantity: 11
  },
  {
    name: 'Tan Jazz Shoes',
    image: 'tan-jazz-revised.png',
    category: categories[4]._id,
    size: 'M',
    quantity: 12
  },
  {
    name: 'Tan Jazz Shoes',
    image: 'tan-jazz-revised.png',
    category: categories[4]._id,
    size: 'L',
    quantity: 12
  }
]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
