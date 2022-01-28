const db = require('./connection');
const { User, Item, Location, Customer } = require('../models');

db.once('open', async () => {
  await Location.deleteMany();

  const locations = await Location.insertMany([
    { name: 'Bin1' },
    { name: 'Bin2' },
    { name: 'Bin3' },
    { name: 'Bin4' },
    { name: 'Bin5' }
  ]);

  console.log('locations seeded');

  await Customer.deleteMany();

  const customers = await Customer.insertMany([
    { name: 'Jane Smith' },
    { items: 'Blue/Black Child Leotard' }
  ]);

  console.log('customers seeded');

  await Item.deleteMany();

  const items = await Item.insertMany([
    {
        name: 'Blue/Black Child Leotard',        
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '100',
        quantity: 1
    },
    {
        name: 'Blue/Black Child Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '110',
        quantity: 4
    },
    {
        name: 'Blue/Black Child Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '120',
        quantity: 4
    },
    {
        name: 'Blue/Black Child Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '140',
        quantity: 2
    },
    {
        name: 'Blue/Black Child Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '150',
        quantity: 1
    },
    {
        name: 'Light Blue Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '120',
        quantity: 5
    },
    {
        name: 'Light Blue Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '130',
        quantity: 2
    },
    {
        name: 'Green Tank Leotard with Skirt',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'XS',
        quantity: 6
    },
    {
        name: 'Green Tank Leotard with Skirt',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'S',
        quantity: 2
    },
    {
        name: 'Green Tank Leotard with Skirt',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'M',
        quantity: 2
    },
    {
        name: 'Pink Tank Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'XSC',
        quantity: 1
    },
    {
        name: 'Pink Tank Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'SC',
        quantity: 2
    },
    {
        name: 'Purple Tank Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'XSC',
        quantity: 2
    },
    {
        name: 'Purple Tank Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'S',
        quantity: 2
    },
    {
        name: 'Black Tank Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'XSC',
        quantity: 6
    },
    {
        name: 'Black Tank Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'SC',
        quantity: 2
    },
    {
        name: 'Black Halter Biketard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'XSC',
        quantity: 0
    },
    {
        name: 'Brown Halter Biketard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '6-7',
        quantity: 2
    },
    {
        name: 'Brown Halter Biketard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '12-14',
        quantity: 5
    },
    {
        name: 'Brown Halter Biketard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'S',
        quantity: 3
    },
    {
        name: 'Brown Halter Biketard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'M',
        quantity: 1
    },
    {
        name: 'Brown Halter Biketard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'L',
        quantity: 1
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'CS',
        quantity: 1
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'IC',
        quantity: 6
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'CM',
        quantity: 3
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'CL',
        quantity: 2
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'AS',
        quantity: 1
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'SC',
        quantity: 5
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'IC',
        quantity: 6
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'MC',
        quantity: 7
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'LC',
        quantity: 9
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'SA',
        quantity: 6
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'MA',
        quantity: 6
    },
    {
        name: 'White Spaghetti Strap Bra Top',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'SC',
        quantity: 12
    },
    {
        name: 'White Spaghetti Strap Bra Top',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'IC',
        quantity: 2
    },
    {
        name: 'White Spaghetti Strap Bra Top',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'LC',
        quantity: 1
    },
    {
        name: 'Red Adult Long Sleeve Scooped Neck Leotard',
        image: 'leotard.jpg',
        category: ['leotards',],
        size: 'AM',
        quantity: 4
    },
    {
        name: 'Red Adult Long Sleeve Scooped Neck Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'AL',
        quantity: 2
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'MC',
        quantity: 2
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'LC',
        quantity: 7
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'S',
        quantity: 4
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'M',
        quantity: 2
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'L',
        quantity: 1
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'XL',
        quantity: 1
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'P',
        quantity: 1
    },
    {
        name: 'Child Lavender Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'S',
        quantity: 5
    },
    {
        name: 'Child Lavender Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: 'I',
        quantity: 1
    },
    {
        name: 'Child/Toddler Pink Spaghetti Strap Leotard',
        image: 'leotard.jpg',
        category: ['leotards'],
        size: '2-4',
        quantity: 3
    }
  ]);

  console.log('items seeded');

  await User.deleteMany();

//   await User.create({
//     firstName: 'Candace',
//     lastName: 'Isaacs',
//     email: 'candaceisaacs01@gmail.com',
//     password: 'password12345',
//     orders: [
//       {
//         items: [itemss[0]._id, items[0]._id, items[1]._id]
//       }
//     ]
//   });

  await User.create({
    firstName: 'Candace',
    lastName: 'Isaacs',
    email: 'candaceisaacs01@gmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
