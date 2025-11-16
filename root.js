import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
const app = express();
app.use(express.json());
app.use(morgan('dev'));
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    if (!res.status) {
        return res.status(500).send('Internal Server Error');
    }
    return res.json({ message: 'Hello, World!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});     