const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use('/api', apiRoutes);

app.use(express.static('./public'));
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
