import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import expressValidator from 'express-validator';


import productRoutes from './routes/product.js'
import categoryRoutes from './routes/category.js'
import newRoutes from './routes/new.js';
import auth from './routes/auth.js';
import userRoutes from './routes/user.js';
import cors from 'cors'

const app = express();

dotenv.config();

app.use(express.json());

app.use(morgan('dev'));

app.use(expressValidator());

app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true
}).then(() => {
    console.log('DB connected')
})

// Routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', newRoutes);
app.use('/api', auth);
app.use('/api', userRoutes);


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`);
})


