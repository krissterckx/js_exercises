const app = require('express')();
const contacts = [
  { id: '1', name: 'Hank Bergnaum' },
  { id: '2', name: 'Lane Auer' },
  { id: '3', name: 'Federico Stark' },
  { id: '4', name: 'Brendan Stoltenberg' },
  { id: '5', name: 'Jadyn Doyle' },
  { id: '6', name: 'Werner Schulist' },
];

app.get('/people', (req, res) => {
  res.json({
    data: contacts.map(c => ({ id: c.id, _link: `/people/${c.id}` })),
  });
});

app.get('/people/:id', (req, res) => {
  res.json({
    data: contacts.find(c => c.id === req.params.id),
  });
});

app.listen(8080, () => console.log('Server is running on http://localhost:8080'));
