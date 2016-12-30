# Drive-access Demo <a>https://driveaccess.herokuapp.com/</a>
Google drive access using OAuth

#What i used
  1.express  command to install - npm install express --save
  2.googleapi command to install - npm install googleapi --save

# Go  to https://console.developers.google.com 
    step->  Create project -> 
            Create credential ->
            Edit OAuth client ->
            Authorized JavaScript origins(this is url where to your app start ex - http://localhost:3000) ->
            Authorized redirect URIs(after auth where you want to  redirect that page ex- http://localhost:3000/authcallback )

# what you Need for complete OAuth 
to get access and refresh token 
  1.  Client id (set in main app  by yourself in app.js )
  2. Client Secret (set by yourself in app.js file)
  
  After that   you get Token for further processing and by Token code  you get  to other token which is below
  help of upper two id and secret after then you get  
  
  1. Access Token
  2. Refresh Token  this both help you to set credetial for google api interchange 
                
# make sure you enable api by
      https://console.developers.google.com  -> dashboard ->Enable 
