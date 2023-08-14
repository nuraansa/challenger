// A middleware is a software that acts as a bridge between an operating system or database and application, especially on a network.
// Its a policy that is on an application that restricts the user.
// An express application can use the following types of middleware:
// 1. application-level middleware
// 2. Router-level middleware 
// 3. Error handling middleware
// 4. Built-in middleware
// 5. Third-party middleware
// eg 1, app.use
// eg 2, express.Router()
// eg 3, app.use(err, req, res, next)
// eg 4, express.static, express.json, express.urlencoded
// eg 5, app.use(bodyParser)