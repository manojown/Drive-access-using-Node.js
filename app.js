var express = require("express");
var google = require("googleapis");


var app = express();

app.use(express.static('static'));

 //  to set the port 3000
 app.listen(process.env.PORT || 3000,function(err)
    {
    	if(err)
    	{
    		console.log(err);
    		console.log("listen failed");
    	}
    	else{ console.log("listen on 3000 port");}
    });

//create OAuth2  object to set credentials in  further

var OAuth2 = google.auth.OAuth2; // this is  Oauth2 object
// set all credentials
var oauth2Client = new OAuth2("890200917783-o47i3demo8ccmhmpqb0cfmo6arji59i2.apps.googleusercontent.com", "8DpTEwpo6OuH8GAbeABUpRwr", "https://driveaccess.herokuapp.com/oauthcallback");

// generate a url that asks permissions for drive scopes
var scopes = [
'https://www.googleapis.com/auth/drive.metadata.readonly'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes 
});

app.get("/url", function(req, res) {
  res.send(url);
});

app.get("/tokens", function(req, res) {

  var code = req.query.code;
  console.log(code);

  //  set  code  in oauth2Client  and  get token from server to further process
  oauth2Client.getToken(code, function(err, tokens) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }

  

    // after   get token set credentials which we  get from above 
   oauth2Client.setCredentials({
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_tokens
         
    });

// print all file
   
    var service = google.drive('v3');
     service.files.list({auth: oauth2Client,}, function(err, response) {
              if (err) {
                console.log('The API returned an error: ' + err);
                return;
              }
              var files = response.files;
              if (files.length == 0) {
                console.log('No files found.');
              } else {
                  
                  return res.send(files);
              }
       });
      //code end here
     });
});