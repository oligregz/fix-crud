const { client } = require('../../../common/handlers/knex/knex');

const createUserRepositories = async ({ user  }) => {
    try {

        const response = await client('users')
            .insert({
                user_email: user.user_email,
                user_password: user.user_password,
                full_name: user.full_name
            });

        return response;

    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    createUserRepositories
}