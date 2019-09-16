const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const cors = require('cors') 
app.use(cors())

app.use("/", express.static("./build/"));
app.use(bodyParser.json())


const { Contact } = require('./models');

const PORT = process.env.PORT || 4567

app.get('/', (req, res) => res.send('Welcome.'))


app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.findAll({raw:true})
    res.json({
      contacts
    })
  } catch(e) {
    res.status(500).json({
      message: e.message
    })
  }
})


app.get('/contacts/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const contact = await Contact.findByPk(id, {raw:true})
    if (!contact) throw Error('Contact not found!')
    res.json({ contact })
  } catch(e) {
    res.status(500).json({
      message: e.message
    })
  }
})


app.post('/contacts', async (req, res) => {
  console.log(req.body)
  try {
    const contact = await Contact.create(req.body)
    res.json(contact)
  } catch(e) {
    console.error(e)
    res.status(500).json({message: e.message})
  }
})


app.put('/contacts/:id', async (req, res) => {
    try {
      const id = req.params.id
      const updateContact = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        image: req.body.image,
      };
      const contact = await Contact.update(updateContact, { where: {id: id} })
      res.json(contact)
    } catch(e) {
      console.error(e)
      res.status(500).json({message: e.message})
    }
  })


app.delete('/contacts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const Contact = await Contact.destroy({ where: {id: id} });
    res.json(Contact);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
});








app.listen(PORT, () => console.log(`Contact app listening on port ${PORT}!`))
