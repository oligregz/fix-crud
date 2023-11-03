const { getUserRepositories } = require("../../../repositories");

const getUserByIdService = async ({ user_id }) => {
    const user = await getUserRepositories({user_id});
    return user;
}

module.exports = {
    getUserByIdService
}