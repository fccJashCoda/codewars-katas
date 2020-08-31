const express = require('express');
const app = express();

const port = process.env.PORT || 6050;

app.get('/', (req, res) => {
  res.json({ msg: 'Kata Practice' });
});
app.listen(port, () => console.log(`App listening on port ${port}`));
