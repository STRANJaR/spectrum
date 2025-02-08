import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
        body: 'Welcome to spectrum server'
    });
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Server is running on port http://localhost:${process.env.PORT || 3000}`);
})