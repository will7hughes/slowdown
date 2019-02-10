const accountSid = 'ACab79098036b949cd1160090289d5751d';
const authToken = '39502a07a6858c63466de90e44c1c9a8';
const client = require('twilio')(accountSid, authToken);

client.messages
 .create({
    body: 'hey You are driving over speed limit',
    from: '+13612215440',
    to: '+13612281152'
  })
 .then(message => console.log(message.sid))
 .done();