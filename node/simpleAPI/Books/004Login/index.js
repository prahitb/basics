const express = require("express");
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);



const PORT = process.env.port || 13579;
app.listen(PORT);
