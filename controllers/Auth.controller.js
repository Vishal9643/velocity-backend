const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const usersModel = require("../modals/user.model");
const { authSchema } = require("../helpers/validation_scema");
const blogModel = require("../modals/blog.model");

module.exports = {
  register: async (req, res, next) => {
    console.log(req.body);
    console.log("amit");
    try {
      result = await authSchema.validateAsync(req.body);
      const doesExist = await usersModel.findOne({ email: result.email });
      if (doesExist)
        throw createError.Conflict(`${req.body.email} already existed`);
      const user = new usersModel(result);
      const savedUser = await user.save();
      res.send({
        isLoggedIn: true,
        name: `${doesExist.fname} ${doesExist.lname}`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res, next) => {
    console.log(req.body);
    try {
      result = await authSchema.validateAsync(req.body);
      const doesExist = await usersModel.findOne({ email: result.email });
      if (!doesExist) {
        res.send("user not registered");
      }
      const isMatch = await bcrypt.compare(result.password, doesExist.password);
      if (!isMatch) {
        res.send("Wrong Credential");
      }
      res.send({
        isLoggedIn: true,
        name: `${doesExist.fname} ${doesExist.lname}`,
      });
    } catch (error) {
      res.status(500).send("internal server error");
    }
  },
  blogdata: async (req, res, next) => {
    try {
      const result = await blogModel.find();
      res.json(result);
    } catch (error) {
      res.status("no data found");
    }
  },
};
