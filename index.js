const express = require("express");
const  path = require("path");
const  dotenv = require("dotenv");
const   mongoose  = require("mongoose");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const {notFoundHandler,errorHandler}=require("./middlewares/common/errorHandler")

const app = express();
dotenv.config();

//database connection
mongoose.connect('mongodb+srv://mmmmm:4qyFbM4t9EhGWKK@cluster0.lls5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(()=>console.log('database connection successful'))
.catch((err)=>(err))

//request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set view engine
app.set("view engine", "ejs");

//set public folder
app.use(express.static(path.join(__dirname, "public")))

//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter)
app.use('/users',usersRouter);
app.use('/',inboxRouter);

//errors handling
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`Your port number is ${process.env.PORT}`)
})