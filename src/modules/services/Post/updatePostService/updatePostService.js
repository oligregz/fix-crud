const { getPostByPostIdRepositories, updatePostRepositories } = require('../../../repositories');

const updatePostService = async ({ post: {
    id,
    author_id,
    post_text
}}) => {

    const post = await getPostByPostIdRepositories({
        post_id: id
    });

    const has_post = Array.isArray(post) && post.length === 1;

    if (!has_post) {
        throw new Error("Hasn't post to update");
    }

    await updatePostRepositories({
        id,
        author_id,
        post_text
    });

    return {
        updated_post: {
            id,
            author_id,
            post_text
        }
    };
}

module.exports = {
    updatePostService
}