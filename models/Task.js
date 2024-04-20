module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Task",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Set a default value if needed
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  return Cart;
};
