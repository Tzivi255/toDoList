import express from 'express'
import axios from 'axios';

const app = express()
const port = 3001

const API_URL = 'https://api.render.com/v1/services'; // ודא שזו הכתובת הנכונה

app.get('/listApiInRender', async (req, res) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer rnd_iEPnO36Ae5QBxDY6Q3Th7XgFm05t` // הכנס את ה-API Key שלך כאן
            }
        });
        res.json(response.data); // מחזיר את המידע מה-API
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data from API');
    }
});

app.listen(port, () => {
    console.log(`run in http://localhost:${port}`);
})