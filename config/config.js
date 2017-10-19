module.exports = {
  PORT: process.env.PORT || 5000,
  ENV: process.env.NODE_ENV || 'development',
  URL: process.env.URL || 'http://localhost:8080',
  SQLDBNAME: process.env.SQLDBNAME || 'KeystrokeDynamics',
  SQLUSER: process.env.SQLUSER || 'root',
  SQLPASSWORD: process.env.SQLPASSWORD || '528751011',
  COOKIEKEY:
    process.env.COOKIEKEY ||
    'flasfbasbfjdlfeflancfeuawfiulwsfahfhlafhjgajkwgwiguleagldshGJLKd'
}
