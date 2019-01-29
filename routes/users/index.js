import { Router } from 'express'
import User from '../../db/models/User'

const users = Router()

users.post('/', async (req, res, next) => {
    User.create({...req.body}).then( () => {
        res.send({'Mssg': 'User created'})
    }).catch( err => {
        next(err);
    })
})

users.get('/:userId', (req, res, next) => {
    User.findById(req.params.userId)
    .exec().then( user => res.status(200).json(user))
    .catch( err => next(err));
})

users.put('/:userId', (req, res, next) => {
    User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
        runValidators: true
    }).exec().then( updatedUser => res.json(updatedUser))
    .catch( err => next(err));
})

users.delete('/:userId', (req, res, next) => {
    User.findByIdAndDelete(req.params.userId)
    .exec().then( () => res.send({'Mssg': 'User deleted'}))
    .catch(err => next(err))
})

export default users