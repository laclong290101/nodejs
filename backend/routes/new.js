import express from 'express';
import { create, list, read, remove, newById, update } from '../controllers/new';


const router = express.Router();


router.get('/news', list);

router.put('/news/:newId', update)

router.param('newId', newById);

router.get('/news/:newId', read);

router.post('/news', create);

router.delete('/news/:newId', remove);

module.exports = router;