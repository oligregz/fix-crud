'use strict'
const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require("../../common/handlers");
const { createUserService } = require('../../services');
const { getUserByIdService } = require('../../services');

const createUserHandler = async (req, res, next) => {
    try {
        const {
            user_email,
            user_password,
            full_name
        } = req.body

        const created_user = await createUserService({
            user_email,
            user_password,
            full_name
        });

        console.log

        return res.status(httpStatusCodes.StatusCodes.CREATED).send({ user_created: {
            user_id: created_user[0],
            user_email,
            user_password,
            full_name
        }});

    } catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    createUserHandler
}