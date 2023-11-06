const { getUserByIdService } = require("../../User/getUserByIdService/getUserByIdService");
const { getPostByUserIdRepositories } = require("../../../repositories");
const { getPostByPostIdRepositories } = require("../../../repositories");

const getPostByIdService = async ({ user_id, post_id }) => {

    const has_user_id = typeof user_id === 'string' && !isNaN(user_id);
    const has_post_id = typeof post_id === 'string' && !isNaN(post_id);

    if (has_user_id) {
        const user = await getUserByIdService({ user_id });

        const has_author = Array.isArray(user.user) && user.user.length > 0;
    
        if(!has_author) {
            throw new Error("Missing author in database");
        }
    
        const posts = await getPostByUserIdRepositories({ user_id });
    
        return posts;

    } else if (has_post_id) {
        
        const posts = await getPostByPostIdRepositories({ post_id });

        const has_posts = Array.isArray(posts) && posts.length > 0;

        if(!has_posts) {
            throw new Error("Missing posts in database");
        }

        return posts;
    }
}

module.exports = {
    getPostByIdService
}