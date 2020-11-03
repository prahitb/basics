const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('../config/keys');

passport.use( new GoogleStrategy (
	{
	clientID: keys.GoogleClientID,
	clientSecret: keys.GoogleClientSecret,
	callbackURL: 'http://localhost:13579/auth/google/callback'
  },
	(accessToken, refreshToken, profile, done) => {
		console.log("AccessToken", accessToken);
		console.log("RefreshToken:", refreshToken);
		console.log("Profile:", profile);

	}
)
);
