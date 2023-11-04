'use strict'

const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require('../../common/handlers');
const { 
    getUserByIdService, 
    getAllUsersService 
} = require('../../services');


const listUsersHandler = async (req, res, next) => {
    try {
        const { user_id } = req.query;

        if (user_id) {
            const user_idInt = parseInt(user_id, 10);

            if (!isNaN(user_idInt)) {
                const user_response = await getUserByIdService({ user_id: user_idInt });

                if (user_response) {
                    return res.status(httpStatusCodes.OK).send(user_response);
                }
            }
        } else {
            const users_response = await getAllUsersService();

            return res.status(httpStatusCodes.OK).send({ users: users_response.users });
        }
    } catch (error) {
        return httpErrorHandler({ req, res, error });
    }
}


// const listUsersHandler = async (req, res, next) => {
//     try{
//         const {
//             user_id
//         } = req.query;
//         console.log("entrou")
//         console.log("user_id:", { user_id })

//         const user_idInt = parseInt(user_id, 10);
        
//         const has_user_id = !!user_id && Number.isFinite(+user_id) && false;

//         const user_response = has_user_id && await getUserByIdService({ user_id: user_idInt });

//         const users_response = !has_user_id && await getAllUsersService();

//         const users = [
//             ...user_response ? user_response.user : [],
//             ...users_response ? users_response.users : []
//         ];

//         return res.status(httpStatusCodes.OK).send({ users: users_response.users });
//     }catch(error){
//         return httpErrorHandler({ req, res, error })
//     }
// }

module.exports = {
    listUsersHandler
}