const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    primaryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Firstname must not be empty",
        },
        max: {
          args: 100,
          msg: "Firstname max length is 100 characters",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Lastname must not be empty",
        },
        max: {
          args: 100,
          msg: "Lastname max length is 100 characters",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email must not be empty",
        },
        max: {
          args: 250,
          msg: "Email max length is 250 characters",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password must not be empty",
        },
        max: {
          args: 1000,
          msg: "Password max length is 1000 characters",
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Phone must not be empty",
        },
        max: {
          args: 100,
          msg: "Phone max length is 100 characters",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    sessionToken: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Token must not be empty",
        },
        max: {
          args: 1000,
          msg: "Password max length is 1000 characters",
        },
      },
    },
  },
  {
    timestamps: true
  }
);

module.exports = User;
