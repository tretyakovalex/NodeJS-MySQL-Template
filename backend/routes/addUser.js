const express = require('express');
const router = express.Router();

const { pool } = require('../configs/mysql');

router.post('/addUser', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        pool.query('INSERT INTO users SET ?', data, (err, user) => {
            if(err){
                console.log(err);
                return res.status(500).send('Internal Server Error');
            }

            res.json({ result: user });
        })
    } catch (error) {
        console.error(error);
    }
});

router.get('/getUsers', async (req, res) => {
    try {
        pool.query('SELECT * FROM users', (err, users) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal Server Error');
            }

            res.json({ result: users });
        })
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;