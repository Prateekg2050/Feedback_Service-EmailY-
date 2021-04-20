const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const users = mongoose.model('users');

passport.serializeUser((user,done)=>{
           done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    users.findById(id).then(user =>{done(null,user)});
})
    

passport.use(
    new GoogleStrategy(
    {
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback',
    proxy : true
    },
    (accessToken, refreshToken, profile, done)=>{

        users.findOne({ googleId: profile.id })
        .then((existingUser)=>{
            if(existingUser){
                done(null,existingUser);
                //user already exist no need to create new one
            }
            else{
                //user doesnt exist , hence create one
                new users ({ googleId: profile.id }).save().then(user =>done(null,user));
            }

        });
        
    }
)
);