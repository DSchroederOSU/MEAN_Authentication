# MEAN_Authentication

clone this repository and run:

```npm install```

you will need to run a mongod daemon to connect to your local database:

```mongod```

the config/database.js file should have the format:

```url : 'mongodb://localhost/YOUR_DB_NAME```

additionally, the config/auth.js should be filled out with your Google API credentials:

```
module.exports = {
    'googleAuth' : {
        'clientID'      : 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'clientSecret'  : 'XXXXXXXXXXXXXXXXXXXXXX',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
```
and you should set the callback url in your google console to:

```http://localhost:8080/auth/google/callback```

lastly, run:

```node server.js```

To serve up the application on http://localhost:8080/