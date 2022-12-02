const express = require('express');
const app = express();
const cors = require('cors');;
const port =  3000;
const customerRouter = require('./routes/index');
const { connect } = require('./config/config-mongo');


app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use('/customers', customerRouter)


connect().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
});


