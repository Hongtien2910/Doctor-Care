'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Specializations', [
            

        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Specializations', null, {});
    }
};
