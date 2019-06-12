// This file requires the data we created for friends to start off with
var friendsData = require("../data/friendsData");
// This is our app.get, which retrieves info from the friends Data
module.exports = function(app){
    app.get("/api/friendsData", function(req, res){
        res.json(friendsData);
    });
    // Our post, includes the functions for pushing the user into the friendsData array, but also we include the math for getting a result
    app.post("/api/friendsData", function(req, res){
       console.log(req.body.number);
       var input = req.body; //input is what the user puts in
       for( i = 0; i < input.number.length; i++){
           input.number[i] = parseInt(input.number[i]);
       }

       var defaultFriend = 0; //the default friend is the first person in the array

       var minDiff = 25; //combining the numbers from the questions, the minimum difference to give someone anything other than the default result
       
       for(i = 0; i < friendsData.length; i++){
        var totDiff = 0; //this is the total difference between the input the user puts in, and a relating friend
        for(j = 0; j < friendsData[i].number.length; j++){
            var diff = Math.abs(input.number[j] - friendsData[i].number[j]);
            totDiff += diff;
        }
        if(totDiff < minDiff) {
            defaultFriend = i;
            minDiff = totDiff
        }
       }
       friendsData.push(input)
       res.json(friendsData[defaultFriend])

    });
    // this allows us to clear the api if we want
    app.post("/api/clear", function(req, res){
        friendsData.length = 0;
        res.json({ok: true});
    });
}