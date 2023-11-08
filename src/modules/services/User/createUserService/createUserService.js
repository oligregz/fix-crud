const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const { createUserRepositories } = require("../../../repositories");

const createUserService = async (user) => {

    const crypt_password = bcrypt.hashSync(user.user_password, salt);

    const user_created = await createUserRepositories({
        user:{
            ...user,
            user_password: crypt_password
        }
    });

    return user_created;
}

module.exports = {
    createUserService
}