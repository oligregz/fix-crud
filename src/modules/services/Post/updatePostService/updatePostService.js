const { getPostByPostIdRepositories, updatePostRepositories } = require('../../../repositories');
const { getUserRepositories } = require('../../../repositories/User/getUserRepositories/getUserRepositories');

const updatePostService = async ({ post: {
    id,
    author_id,
    post_text
}}) => {


    const author = await getUserRepositories({ user_id: author_id });
    const has_author = Array.isArray(author) && author.length > 0;


    if (!has_author) {
        throw new Error("Author not found")
    }


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