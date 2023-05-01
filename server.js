/* import required modules */
const mysql = require("mysql12");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const  bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();

/* import custom modules */
const helpers = require("./utils/helpers");
const routes = require("./controllers");

/* import sequelize */
const sequelize = require("./config/connect");
const SquelizeStore = require("connect-session-squelize")(session.Store);

/* create expression app */
const app = express();

/* set up port */
const PORT = process.env.PORT || 3001;

/* config handlebars engine */
const hbs = exphbs.create({ helpers });

const session = {
    Secret: "secret",
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(expression.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Listening..."));
});