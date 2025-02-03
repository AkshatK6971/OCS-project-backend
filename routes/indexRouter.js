const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController")

indexRouter.post("/validate", async (req, res) => {
    const {userId, hash} = req.body;
    const {data, error} = await indexController.validate(userId, hash);
    if(!error){
        if(data.length > 0){
            res.json(JSON.stringify(data));
        }
        else{
            res.json(JSON.stringify({"error":"Auth Error"}));
        }
    }
    else
    res.json(JSON.stringify({"error": "Error"}));
});

module.exports = indexRouter;