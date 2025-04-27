import mongoose from 'mongoose';

export const AccountModel = mongoose.model('User', new mongoose.Schema({
    username    : { type: String, unique: true, required: true },
    email       : { 
        type: String,
        validate: {
            validator: async function(value) {
                if (!value) return true;
                const existingAccount = await mongoose.models.Account.findOne({ email: value });
                return !existingAccount;
            },
            message: 'email must be unique'
        }
    },
    password    : { type: String, required: true },
    color       : { type: String, required: true },

    uuid        : { type: String, unique: true, required: true },

    forename    : { type: String, required: true },
    surname     : { type: String, required: true },
}));