const knex = require('../../../../database');

const getUserRepositories = async ({ user_id }) => {

    const response = await knex('users').where({ id: user_id});
    
    const has_response = Array.isArray(response) && response.length > 0;

    if(!has_response){
        return {
            users: []
        }
    }

    return response;
}


module.exports = {
    getUserRepositories
}