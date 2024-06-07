// Importing the UserController module from the '../controllers/user.controller' file
const UserController = require("../controllers/user.controller");

// Importing the BaseRoute module from the './Base.route' file
const BaseRoute = require("./Base.route");

// Importing the routes enum from the '../utils/enum/routes.enum' file
const routes = require("../utils/enum/routes.enum");

// Defining a new class UserRoutes which extends BaseRoute
class UserRoutes extends BaseRoute {
  constructor() {
    // Calling the constructor of the parent class (BaseRoute) and passing an instance of UserController
    super(new UserController());

    // Calling the setupRoutes method and catching any errors that occur
    this.setupRoutes().catch((error) => {
      console.error("Error setting up routes:", error);
    });
  }

  // Asynchronously setting up routes
  async setupRoutes() {
    // Calling the setupRoutes method of the parent class (BaseRoute)
    await super.setupRoutes();

    // Binding the Custom method of the exampleController instance to the exampleController object
    //const getByPriceHandler = this.exampleController.Custom.bind(this.exampleController);

    // Adding a GET route with the path specified in the routes enum, using the getByPriceHandler as the route handler
    //this.router.get(routes.CUSTOM, getByPriceHandler);
  }
}

// Exporting the UserRoutes class to be used in other modules
module.exports = UserRoutes;
