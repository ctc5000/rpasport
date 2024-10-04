const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

passport.use('ReavizOnline', new OAuth2Strategy({
        authorizationURL: 'https://lks.reaviz.online/login',
        tokenURL: 'https://lks.reaviz.online/auth/token',
        clientID: '1',
        clientSecret: 'wvt4YJ4ZfEjrHh4FsHwrCCyYuPfF3nerLJPXvbRX',
        callbackURL: 'http://oauth2.reaviz.seotlt.xsfera.ru:3000'
    },
    function(accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    console.log(done);
        // Найдите или создайте пользователя в вашей базе данных
        // вы можете использовать profile для получения данных о пользователе
        return done(null, profile);
    }));