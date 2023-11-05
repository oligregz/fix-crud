'use strict'
const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require('../../common/handlers');
const { getPostByUserIdService } = require('../../services');

const listPostHandler = async (req, res, next) => {
    try{
        const {
            user_id,
            post_id
        } = req.query;

        // console.log('user_id: ', user_id)
        // console.log('post_id: ', post_id)

        const has_user_id = typeof user_id === 'string' && !isNaN(user_id);
        const has_post_id = typeof post_id === 'string' && !isNaN(post_id);
        // console.log('has_user_id: ', has_user_id)
        // console.log('has_post_id: ', has_post_id)

        if (has_user_id) {
            // console.log('user_id:', user_id)
            const posts = await getPostByUserIdService({ user_id: user_id });
    
            return res.status(httpStatusCodes.StatusCodes.OK).send({ posts });

        } else if (has_post_id) {
            // console.log('post_id:', post_id)
            const posts = await getPostByUserIdService({ post_id: post_id });

            return res.status(httpStatusCodes.StatusCodes.OK).send({ posts });
        }
        

    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    listPostHandler
}