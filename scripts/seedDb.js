const { Contact } = require('../models')

const main = async () => {

  // delete database
  await Contact.destroy({
    where: {}
  });



const felicity = await Contact.create({
    first_name: 'Xiaofang',
    last_name: 'Zhang',
    phone: 123456,
    email: 'xiao@nyu.edu',
    image: 'https://www.barraques.cat/pngfile/big/43-430987_cute-profile-images-pic-for-whatsapp-for-boys.jpg'
  });

  const alane = await Contact.create({
    first_name: 'Alane',
    last_name: 'Bibang',
    phone: 123456,
    email: 'alane@ga.com',
    image: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  });

  process.exit()
}
  main();