import express from 'express';
import { create, list, remove, update, categoryById } from '../controllers/category';


const router = express.Router();

router.get('/categories', list);

router.put('/categories/:categoryId', update)

router.post('/categories', create);

router.delete('/categories/:categoryId', remove);

router.param('categoryId', categoryById);

module.exports = router;