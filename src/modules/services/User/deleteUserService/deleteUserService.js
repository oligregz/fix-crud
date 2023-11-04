const { getUserRepositories, deleteUserRepositories } = require("../../../repositories");

const deleteUserService = async ({
    user_id
}) => {

    const user = await getUserRepositories({
        user_id
    });

    const has_user = Array.isArray(user) && user.length === 1;

    if(!has_user){
        throw new Error("No user to delete")
    }

    const [user_to_delete] = user;

    await deleteUserRepositories({
        user_id: user_to_delete.id
    })

    return {
        deletedUser: user_to_delete
    };
}

module.exports = {
    deleteUserService
}