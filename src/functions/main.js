let updateClient;
module.exports = {
    login: token => {
        updateClient = setInterval(clientUpdate, 1000);
    },
    logout: () => {
                process.env.BEAM_DATA_CLIENT = null;
                clearInterval(updateClient);
    },
    users: {
            get: userID => {

            },
    communities: {
            get: communityID => {

            },
        },
    },
};

function clientUpdate() {

};

