const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workflow', {
    id_workflow: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    etat_validation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    utilisateur_en_charge: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_debut_validation: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_fin_validation: {
      type: DataTypes.DATE,
      allowNull: true
    },
    commentaire_validation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_obligation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'obligation',
        key: 'id_obligation'
      }
    }
  }, {
    sequelize,
    tableName: 'workflow',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_workflow" },
        ]
      },
      {
        name: "id_obligation",
        using: "BTREE",
        fields: [
          { name: "id_obligation" },
        ]
      },
    ]
  });
};
