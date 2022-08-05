const express = require('express');
const app = express();
const { v4 = uuid(v4) } = require('uuid')

const PORT = process.env.PORT || 9090; 




// view engine configuration
app.set('view engine', 'ejs');



//setting routes
app.get('/', (req, res)=> {
    res.render('index')
})
app.get('/home', (req, res) =>{
    res.render('homepage')
})




//static folders
app.use(express.static('public'));



//port calling
app.listen(PORT, ()=> {
    console.log(`listening on Port ${PORT}`);
})