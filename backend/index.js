const express = require("express");
const cors = require("cors");

require("./db/config");
const User = require("./db/User");
const Booking = require("./db/Booking");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.Password
  resp.send(result);
});
app.post("/login", async (req, resp) => {
  if (req.body.Password && req.body.Email) {
    let user = await User.findOne(req.body).select("-Password");

    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }


});
app.post("/add-booking", async(req,resp)=>{
 let booking = new Booking( req.body);
 let result = await booking.save();
 resp.send(result)
})
app.listen(5000);
