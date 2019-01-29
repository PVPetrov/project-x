import { Router } from 'express'
import users from './users'

const router = Router();

router.get('/', (req, res, next) => {
    res.send('Hello world!');
})
router.use('/users', users)

export default router