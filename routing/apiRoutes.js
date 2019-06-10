var friendsData = require("../data/friendsData");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
       console.log(req.body.scores);
       var input = req.body;
       for( i = 0; i < input.scores.length; i++){
           input.scores[i] = parseInt(input.scores[i]);
       }

       var defaultFriend = 0;
       var minDiff = 25;
       
       for(i = 0; i < friendsData.length; i++){
        var totDiff = 0;
        for(j = 0; j < friends[i].scores.length; j++){
            var diff = Math.abs(input.scores[j] - friendsData[i].scores[j]);
            totDiff += diff;
        }
        if(totDiff < minDiff) {
            defaultFriend = i;
            minDiff = totDiff
        }
       }
       friends.push(input)
       res.json(friendsData[defaultFriend])

    });

    app.post("/api/clear", function(req, res){
        friendsData.length = 0;
        res.json({ok: true});
    });
}