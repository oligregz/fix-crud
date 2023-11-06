'use strict'

const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require('../../common/handlers');
const { 
    getUserByIdService, 
    getAllUsersService 
} = require('../../services');


const listUsersHandler = async (req, res, next) => {
    try{
        const {
            user_id
        } = req.query;
        
        const has_user_id = !!user_id && Number.isFinite(+user_id);

        const user_response = has_user_id && await getUserByIdService({ user_id });

        const users_response = !has_user_id && await getAllUsersService();
        
        const users = [
            ...user_response ? user_response.user : [],
            ...users_response ? users_response : []
        ];

        return res.status(httpStatusCodes.StatusCodes.OK).send({users});
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    listUsersHandler
}