const { getPostByPostIdRepositories, deletePostRepositories } = require("../../../repositories");

const deletePostService = async ({
    post_id
}) => {

    const post = await getPostByPostIdRepositories({
        post_id
    });

    const has_post = Array.isArray(post) && post.length === 1;

    if(!has_post){
        throw new Error("Hasn't post to delete")
    }

    const [post_to_delete] = post;

    await deletePostRepositories({
        post_id: post_to_delete.id
    })

    return {
        deletedPost: post_to_delete
    };
}

module.exports = {
    deletePostService
}