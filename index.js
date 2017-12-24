const app = require('express')();
const fs = require('fs');

app.get('/',(req, res) => {
  res.send('ok');
})

app.listen(3000, function(){
  console.log('listening');
});

