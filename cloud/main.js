


///########### cloud code function for Drop In Insight ##############################


// dropIn rewards earned today

Parse.Cloud.define('dropInRewardsEarnedToday', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("date");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        var rewardsEarnedToday = object.get('rewardsEarned');
        res.success(rewardsEarnedToday);
      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});

// drop in rewards redeemed today

Parse.Cloud.define('dropInRewardsRedeemedToday', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("date");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        res.success(object.get('rewardsRedeemed'));
      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});




// drop in total users since v2

Parse.Cloud.define('dropInTotalUsers', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("date");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        res.success(object.get('totalUsers'));
      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});



// drop in tuser signups

Parse.Cloud.define('dropInUserSignups', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("date");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var userSignupArray = [];
        var signup0 = object.get('userSignups');
        var signup1 = object.get('userSignupsMinus1');
        var signup2 = object.get('userSignupsMinus2');
        var signup3 = object.get('userSignupsMinus3');
        var signup4 = object.get('userSignupsMinus4');
        var signup5 = object.get('userSignupsMinus5');
        var signup6 = object.get('userSignupsMinus6');
        var signup30 = object.get('userSignupsMinus30');
        var signup60 = object.get('userSignupsMinus60');
        //res.success(object.get('totalUsersUndef'));

        userSignupArray.push(signup0);
        userSignupArray.push(signup1);
        userSignupArray.push(signup2);
        userSignupArray.push(signup3);
        userSignupArray.push(signup4);
        userSignupArray.push(signup5);
        userSignupArray.push(signup6);
        userSignupArray.push(signup30);
        userSignupArray.push(signup60);

        res.success(userSignupArray);

      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});






// drop in total users gender breakdown since v2

Parse.Cloud.define('dropInGenderBreakdown', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("date");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var genderArray = [];
        var undefUsers = object.get('totalUsersUndef');
        var femaleUsers = object.get('totalUsersFemale');
        var maleUsers = object.get('totalUsersMale');
        //res.success(object.get('totalUsersUndef'));

        genderArray.push(undefUsers);
        genderArray.push(femaleUsers);
        genderArray.push(maleUsers);

        res.success(genderArray);

      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});





//comment
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi its nickaroo');
});

///########### cloud code function for Drop In Insight ##############################
