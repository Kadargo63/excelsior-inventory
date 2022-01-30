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
      quantity: 2
  },
  {
      name: 'Blue Short Sleeve Leotard',
      image: 'blue-short-sleeve-leotard.png',
      category: categories[0]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'White Short Sleeve Leotard',
      image: 'white-short-sleeve-leotard.png',
      category: categories[0]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Short Sleeve Leotard',
      image: 'black-short-sleeve-leotard.png',
      category: categories[0]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Pink Long Sleeve Leotard',
      image: 'pink-long-sleeve-leotard.png',
      category: categories[0]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Long Sleeve Leotard',
      image: 'black-long-sleeve-leotard.png',
      category: categories[0]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'White Long Sleeve Leotard',
      image: 'white-long-sleeve-leotard.png',
      category: categories[0]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Biketard',
      image: 'black-biketard.png',
      category: categories[0]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Leopard Biketard',
      image: 'leopard-biketard.png',
      category: categories[0]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Light Blue Dress',
      image: 'light-blue-dress.png',
      category: categories[1]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Teal Dress',
      image: 'teal-dress.png',
      category: categories[1]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Dress',
      image: 'black-dress.png',
      category: categories[1]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Pink Dress',
      image: 'pink-dress.png',
      category: categories[1]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Navy Dress',
      image: 'navy-dress.png',
      category: categories[1]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black/Gold Dress',
      image: 'black-gold-dress.png',
      category: categories[1]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Champagne Dress',
      image: 'champagne-dress.png',
      category: categories[1]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Maroon Dress',
      image: 'maroon-dress.png',
      category: categories[1]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Pink/Gold Tutu Dress',
      image: 'pink-gold-tutu-dress.png',
      category: categories[2]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Toyal Blue Tutu Dress',
      image: 'royal-blue-tutu-dress.png',
      category: categories[2]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Aqua Tutu Dress',
      image: 'aqua-tutu-dress.png',
      category: categories[2]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Pink Tutu Dress',
      image: 'pink-tutu-dress.png',
      category: categories[2]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Light Blue Tutu Dress',
      image: 'light-blue-tutu-dress.png',
      category: categories[2]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Blue Tutu',
      image: 'blue-tutu.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Pink Tutu',
      image: 'pink-tutu.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Purple Tutu',
      image: 'purple-tutu.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Blue/Purple Tutu',
      image: 'blue-purple-tutu.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Gold Glitter Tutu',
      image: 'gold-tutu.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Silver Glitter Tutu',
      image: 'silver-tutu.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'White Long Chiffon Skirt',
      image: 'white-long-skirt.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Long Chiffon Skirt',
      image: 'black-long-skirt.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Maroon Long Chiffon Skirt',
      image: 'maroon-long-skirt.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'White Skirt',
      image: 'white-skirt.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Blue Skirt',
      image: 'blue-skirt.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Skirt',
      image: 'black-skirt.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Pink Skirt',
      image: 'pink-skirt.png',
      category: categories[3]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Pink Ballet Slippers',
      image: 'pink-ballet-slippers.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Ballet Slippers',
      image: 'black-ballet-slippers.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Red Toe Shoes',
      image: 'red-toe-shoes.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Pink Toe Shoes',
      image: 'pink-toe-shoes.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Toe Shoes',
      image: 'black-toe-shoes.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'White Tap Shoes',
      image: 'white-tap-shoes.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Tan Tap Shoes',
      image: 'tan-tap-shoes.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Black Tap Shoes',
      image: 'black-tap-shoes.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
  {
      name: 'Tan Jazz Shoes',
      image: 'tan-jazz-shoes.png',
      category: categories[4]._id,
      size: 'S',
      quantity: 2
  },
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
