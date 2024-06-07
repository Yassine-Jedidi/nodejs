// Importing the UserService module from the '../services/user.service' file
const UserService = require("../services/user.service");
// Importing the User model from the "../models/user.model" file
const User = require("../models/user.model");
// Importing the IBaseController module from the "./IBase.controller" file
const IBaseController = require("./IBase.controller");

// Defining a new class UserController which extends IBaseController
class UserController extends IBaseController {
  constructor() {
    // Calling the constructor of the parent class (IBaseController) and passing an instance of UserService initialized with User model
    super(new UserService(User));
    // Initializing an instance of UserService with User model and assigning it to the property userService of the UserController class
    this.userService = new UserService(User);
  }

  // Defining a custom method called Custom that takes in request (req) and response (res) objects
  /*Custom = async (req, res) => {
        // Await and handle the promise returned by the service's custom method, passing the request body as a parameter.
        await this.handleRequest(this.userService.custom(req.body), res);
    }*/
}

// Exporting the UserController class to be used in other modules
module.exports = UserController;
