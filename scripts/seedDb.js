const { Contact } = require('../models')

const main = async () => {

  // delete database
  await Contact.destroy({
    where: {}
  });



const felicity = await Contact.create({
    id: 1,
    first_name: 'Xiaofang',
    last_name: 'Zhang',
    phone: 123456,
    email: 'xiao@nyu.edu',
    image: 'https://i.imgur.com/D5wcicT.jpg?1'
  });

  const alane = await Contact.create({
      id:2,
    first_name: 'Alane',
    last_name: 'Bibang',
    phone: 123456,
    email: 'alane@ga.com',
    image: 'https://i.imgur.com/DARzyGL.jpg'
  });


  process.exit()
}
  main();