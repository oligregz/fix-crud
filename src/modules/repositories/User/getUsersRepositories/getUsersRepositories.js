const knex = require('../../../../database');

const getUsersRepositories = async () => {

    const response = await knex('users');
    
    const has_response = Array.isArray(response) && response.length > 0;

    if(!has_response){
        return {
            users: []
        }
    }

    return response;
}

module.exports = {
    getUsersRepositories
}