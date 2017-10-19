module.exports = {
  PORT: process.env.PORT || 5000,
  ENV: process.env.NODE_ENV || 'development',
  URL: process.env.URL || 'http://localhost:8080',
  DB: {
    DATABASE: process.env.SQLDBNAME || 'KeystrokeDynamics',
    USER: process.env.SQLUSER || 'root',
    PASSWORD: process.env.SQLPASSWORD || '528751011',
    OPTIONS: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }
  },
  AUTH: {
    JWTSECRET: process.env.JWTSECRET || 'secret'
  },
  COOKIEKEY:
    process.env.COOKIEKEY ||
    'flasfbasbfjdlfeflancfeuawfiulwsfahfhlafhjgajkwgwiguleagldshGJLKd'
}
