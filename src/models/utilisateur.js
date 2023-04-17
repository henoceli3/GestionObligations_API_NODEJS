const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateur', {
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adresse_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mot_de_passe: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_entite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'entite',
        key: 'id_entite'
      }
    }
  }, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_utilisateur" },
        ]
      },
      {
        name: "id_entite",
        using: "BTREE",
        fields: [
          { name: "id_entite" },
        ]
      },
    ]
  });
};
