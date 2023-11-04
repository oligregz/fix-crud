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
        })

        const response_user_id = await created_user;

        const userExists = await getUserByIdService({ user_id: response_user_id });

        return res.status(httpStatusCodes.StatusCodes.CREATED).send(userExists[0]);

    } catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    createUserHandler
}