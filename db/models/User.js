import { Schema, model } from 'mongoose'
import validator from 'validator'

const User = Schema({
    firstName: {
        type: String,
        validate: {
            validator: val => !validator.isEmpty(val, { ignore_whitespace:true }),
            message: props => `"${props.value}" is not a valid first name.`,
        },
        required: [true, 'User name is required']
    },
    lastName: {
        type: String,
        validate: {
            validator: val => !validator.isEmpty(val, { ignore_whitespace:true }),
            message: props => `"${props.value}" is not a valid last name.`,
        },
        required: [true, 'User name is required']
    },
    email: {
        type: String,
        validate: {
            validator: val => validator.isEmail(val),
            message: props => `${props.value} is not a valid email.`,
        },
        required: [true, 'User email is required']
    },
    address: {
        country: {
            type: String,
            validate: {
                validator: val => !validator.isEmpty(val, { ignore_whitespace:true }),
                message: props => `"${props.value}" is not a valid country.`,
            },
        },
        city: {
            type: String,
            validate: {
                validator: val => !validator.isEmpty(val, { ignore_whitespace:true }),
                message: props => `"${props.value}" is not a valid city.`,
            },
        },
        street: {
            type: String,
            validate: {
                validator: val => !validator.isEmpty(val, { ignore_whitespace:true }),
                message: props => `"${props.value}" is not a valid street.`,
            },
        },
        postcode: {
            type: String,
            validate: {
                validator: val => validator.isPostalCode(val, 'any'),
                message: props => `"${props.value}" is not a valid postal code.`,
            }
        }
    }
})

export default model('User', User)