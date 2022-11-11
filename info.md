<!--
# npm init -y
## npm i express mongoose
### npm i --save-dev nodemon
#### npm start

   => After that going to package.json to ${edit} script to <=
    {
        "main": "app.js",
    }
    {
        "scripts": {
            "start": "nodemon app.js"
        },
    }
    => After that going to create app.js to with snippest node-express to createing server <=

    => After that going to create Folder modules then in modules
        create 2 Folders blogs & users

    => After that going to Folder users then create 4 Folders
        1- controller
        2- model
        3- routes
        4- schema

    => After that going to Folder routes then create File
        1- users.route.js =(){
            const router = require("express").Router();
            router.get('/users' , )
            module.exports = router;
        }

    => After that going to Folder controller then create File
        1- user.controller.js =(){
            const getAllUsers = (req, res) => {
            res.json({ message: "All users" });
            };
            module.exports = {
            getAllUsers,
            };
        }

    => After that going to
        users.route.js(){
            const { getAllUsers } = require("../controller/user.controller");
            const router = require("express").Router();
            router.get("/users", getAllUsers);
            module.exports = router;
        }

    => After that going to create Folder configration then create
        1- configDb.js(){
            const mongoose = require("mongoose");
            const connection = () => {
                return mongoose.connect(""mongodb://localhost:27017/testDb"", {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
            };
            module.exports = connection;
        }
    => After that going to app.js to call connection
        app.js(){
            const express = require("express");
            const connection = require("./configration/configDb");
            const app = express();
            const port = 5000;
            connection();
            app.get("/", (req, res) => res.send("Hello World!"));
            app.listen(port, () => console.log(`app listen on port ${port}!`));
        }

    => After that going to Folder scheme to create user.scheme.js to make mongoose
        1- user.scheme.js(){
            const mongoose = require("mongoose");
                const userSchema = new mongoose.Schema(
                    {
                        name: { type: String },
                        email: { type: String },
                        password: { type: String },
                    },
                    {
                        // ** to give me created AT & updated AT ** //
                        timestamps: true,
                    }
                );

                module.exports = userSchema;
            }

    => After that going to Folder model to create user.model.js
        1- user.model.js(){
            const mongoose = require("mongoose");
            const userSchema = require("../schema/user.scheme");
            const User = mongoose.model("user", userSchema);
            module.exports = User
        }

    => After that going to File user.controller.js
        1- user.controller.js(){
            const User = require("../model/user.model");
            const getAllUsers = async (req, res) => {
                const users = await User.find({});
                res.json({ message: "All users", data: users });
            };

            module.exports = {
                getAllUsers,
            };
        }

    => After that going to app.js to call users
        -1 app.js(){
            const express = require("express");
            const app = express();
            const userRoute = require("./modules/users/routes/users.route");
            const port = 9000;
            const mongoose = require("mongoose");
            app.use(express.json());
            app.use(userRoute);
            app.get("/", (req, res) => res.send("Hello World ..!"));
            mongoose
                .connect(
                    "mongodb+srv://rwan:rwan@cluster0.lezqyqx.mongodb.net/?retryWrites=true&w=majority"
                )
                .then((result) => {
                    app.listen(port);
                    console.log(`db connected on port ${port}`);
                })
                .catch((err) => {
                    console.log(err);
                });

    => After that going to http://localhost:${port}/users to call users
        and see what is the results









 -->
