const {express, routes} = require('./controller')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const errorHandling= require ('./middleware/ErrorHandling.js')
const port = +process.env.PORT || 3000


app.use((req, res, next)=> {
    res.header("Access-Control-Allow-origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
  next();
})
routes.get('^/$|/challenger', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 
        './static/html/index.html'))
});
// we need to allow them to use static folder
app.use(
    express.static('./static'),
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    cors(),
    routes
)
// Handling all errors
app.use(errorHandling);
app.listen(port, ()=> {
    console.log(`The server is running on port ${port}`);
})