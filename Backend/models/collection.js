'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Collection extends Model {
        static associate(models) {
            Collection.belongsTo(models.Genre, {
                foreignKey: 'genreId',
                as: 'genre',
            })
        }
    }
    Collection.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            genreId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Collection',
        }
    )
    return Collection
}