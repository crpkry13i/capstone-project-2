const { app } = require('./authorization_code/app')


app.listen(8888, () => {
  console.log('Listening on port 8888')
})