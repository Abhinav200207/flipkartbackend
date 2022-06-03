const express = require('express');
const app = express();
const productRoute = require('./productRoutes.js');
const cors = require('cors')

const { connectDatabase } = require('./db.js');

connectDatabase();
app.use(cors());
app.use(express.json());
app.use("/api/v1/", productRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})