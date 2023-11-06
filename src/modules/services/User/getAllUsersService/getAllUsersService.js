const { getUsersRepositories } = require("../../../repositories");

const getAllUsersService = async () => {

    const users = await getUsersRepositories();

    const has_multiple_user = Array.isArray(users) && users.length > 0;

    if (!has_multiple_user) {
        return {
            users: []
        }
    }

    return users;
}

module.exports = {
    getAllUsersService
}