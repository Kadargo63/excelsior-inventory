const db = require('./connection');
const { User, Item, Location, Customer, Category} = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Leotards/Basics' },
        { name: 'Lyrical Dresses' },
        { name: 'Bodysuits' },
        { name: 'Tiny Tots' },
        { name: 'Solo Costumes' },
        { name: 'Tops' },
        { name: 'Bottoms' },
        { name: 'Hip Hop' },
        { name: 'Accessories' }
    ]);
    
    console.log('categories seeded');
  
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
        image: 'blue-black-leotard.png',
        category: categories[0]._id,
        size: '100',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Blue/Black Child Leotard',
        image: 'blue-black-leotard.png',
        category: categories[0]._id,
        size: '110',
        quantity: 4,
        location: locations[0]._id
    },
    {
        name: 'Blue/Black Child Leotard',
        image: 'blue-black-leotard.png',
        category: categories[0]._id,
        size: '120',
        quantity: 4,
        location: locations[0]._id
    },
    {
        name: 'Blue/Black Child Leotard',
        image: 'blue-black-leotard.png',
        category: categories[0]._id,
        size: '140',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Blue/Black Child Leotard',
        image: 'blue-black-leotard.png',
        category: categories[0]._id,
        size: '150',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Light Blue Long Sleeve Leotard',
        image: 'blue-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: '120',
        quantity: 5,
        location: locations[0]._id
    },
    {
        name: 'Light Blue Long Sleeve Leotard',
        image: 'blue-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: '130',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Green Tank Leotard with Skirt',
        image: 'green-tank-leotard.png',
        category: categories[0]._id,
        size: 'XS',
        quantity: 6,
        location: locations[0]._id
    },
    {
        name: 'Green Tank Leotard with Skirt',
        image: 'green-tank-leotard.png',
        category: categories[0]._id,
        size: 'S',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Green Tank Leotard with Skirt',
        image: 'green-tank-leotard.png',
        category: categories[0]._id,
        size: 'M',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Pink Tank Leotard',
        image: 'pink-tank-leotard.png',
        category: categories[0]._id,
        size: 'XSC',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Pink Tank Leotard',
        image: 'pink-tank-leotard.png',
        category: categories[0]._id,
        size: 'SC',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Purple Tank Leotard',
        image: 'purple-tank-leotard.png',
        category: categories[0]._id,
        size: 'XSC',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Purple Tank Leotard',
        image: 'purple-tank-leotard.png',
        category: categories[0]._id,
        size: 'S',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Black Tank Leotard',
        image: 'black-tank-leotard.png',
        category: categories[0]._id,
        size: 'XSC',
        quantity: 6,
        location: locations[0]._id
    },
    {
        name: 'Black Tank Leotard',
        image: 'black-tank-leotard.png',
        category: categories[0]._id,
        size: 'SC',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Black Halter Biketard',
        image: 'black-halter-biketard.png',
        category: categories[0]._id,
        size: 'XSC',
        quantity: 0,
        location: locations[0]._id
    },
    {
        name: 'Brown Halter Biketard',
        image: 'brown-halter-biketard.png',
        category: categories[0]._id,
        size: '6-7',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Brown Halter Biketard',
        image: 'brown-halter-biketard.png',
        category: categories[0]._id,
        size: '12-14',
        quantity: 5,
        location: locations[0]._id
    },
    {
        name: 'Brown Halter Biketard',
        image: 'brown-halter-biketard.png',
        category: categories[0]._id,
        size: 'S',
        quantity: 3,
        location: locations[0]._id
    },
    {
        name: 'Brown Halter Biketard',
        image: 'brown-halter-biketard.png',
        category: categories[0]._id,
        size: 'M',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Brown Halter Biketard',
        image: 'brown-halter-biketard.png',
        category: categories[0]._id,
        size: 'L',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'white-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'CS',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'white-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'IC',
        quantity: 6,
        location: locations[0]._id
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'white-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'CM',
        quantity: 3,
        location: locations[0]._id
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'white-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'CL',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'White Scooped Neck Long Sleeve Leotard',
        image: 'white-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'AS',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'black-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'SC',
        quantity: 5,
        location: locations[0]._id
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'black-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'IC',
        quantity: 6,
        location: locations[0]._id
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'black-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'MC',
        quantity: 7,
        location: locations[0]._id
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'black-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'LC',
        quantity: 9,
        location: locations[0]._id
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'black-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'SA',
        quantity: 6,
        location: locations[0]._id
    },
    {
        name: 'Black High Neck Long Sleeve Leotard',
        image: 'black-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'MA',
        quantity: 6,
        location: locations[0]._id
    },
    {
        name: 'White Spaghetti Strap Bra Top',
        image: 'white-bra-top.png',
        category: categories[0]._id,
        size: 'SC',
        quantity: 12,
        location: locations[0]._id
    },
    {
        name: 'White Spaghetti Strap Bra Top',
        image: 'white-bra-top.png',
        category: categories[0]._id,
        size: 'IC',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'White Spaghetti Strap Bra Top',
        image: 'white-bra-top.png',
        category: categories[0]._id,
        size: 'LC',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Red Adult Long Sleeve Scooped Neck Leotard',
        image: 'red-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'AM',
        quantity: 4,
        location: locations[0]._id
    },
    {
        name: 'Red Adult Long Sleeve Scooped Neck Leotard',
        image: 'red-long-sleeve-leotard.png',
        category: categories[0]._id,
        size: 'AL',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'nude-spaghtetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'MC',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'nude-spaghtetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'LC',
        quantity: 7,
        location: locations[0]._id
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'nude-spaghtetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'S',
        quantity: 4,
        location: locations[0]._id
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'nude-spaghtetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'M',
        quantity: 2,
        location: locations[0]._id
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'nude-spaghtetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'L',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'nude-spaghtetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'XL',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Nude Spaghetti Strap Leotard',
        image: 'nude-spaghtetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'P',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Child Lavender Spaghetti Strap Leotard',
        image: 'lavender-spaghetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'S',
        quantity: 5,
        location: locations[0]._id
    },
    {
        name: 'Child Lavender Spaghetti Strap Leotard',
        image: 'lavender-spaghetti-strap-leotard.png',
        category: categories[0]._id,
        size: 'I',
        quantity: 1,
        location: locations[0]._id
    },
    {
        name: 'Child/Toddler Pink Spaghetti Strap Leotard',
        image: 'pink-spaghetti-strap-leotard.png',
        category: categories[0]._id,
        size: '2-4',
        quantity: 3,
        location: locations[0]._id
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
