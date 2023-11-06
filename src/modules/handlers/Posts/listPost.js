'use strict'
const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require('../../common/handlers');
const { getPostByIdService } = require('../../services');

const listPostHandler = async (req, res, next) => {
    try{
        const {
            user_id,
            post_id
        } = req.query;

        const has_user_id = typeof user_id === 'string' && !isNaN(user_id);
        const has_post_id = typeof post_id === 'string' && !isNaN(post_id);

        if (has_user_id) {
            const posts = await getPostByIdService({ user_id: user_id });
    
            return res.status(httpStatusCodes.StatusCodes.OK).send({ posts });

        } else if (has_post_id) {
            const posts = await getPostByIdService({ post_id: post_id });

            return res.status(httpStatusCodes.StatusCodes.OK).send({ posts });
        }
        
        return res.status(httpStatusCodes.StatusCodes.BAD_GATEWAY).send({message: "Missing id key"})
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    listPostHandler
}