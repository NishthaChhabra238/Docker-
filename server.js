const express = require("express");
const app = express();

const PORT = process.env.PORT || 9898;

app.get("/", (req, res)=> {
    res.send("<h1>Hello from Express + Docker...!!! heyyyyy nishh</h1>");
})

app.listen(PORT, () => {
    console.log("Server started on PORT :",PORT);
})
//docker tag local-image:tagname new-repo:tagname
//docker push new-repo:tagname