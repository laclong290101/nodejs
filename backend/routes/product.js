import express from 'express';
import { create, list, read, remove, productById, update, photo } from '../controllers/product';


const router = express.Router();


router.get('/product', list);

router.put('/product/:productId', update)

router.param('productId', productById);

router.get('/product/:productId', read);

router.post('/product', create);

router.delete('/product/:productId', remove);

router.get("/product/photo/:productId", photo)


module.exports = router;