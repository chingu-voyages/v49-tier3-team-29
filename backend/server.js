import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const port = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
	res.send('Shelf Shell');
});

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
