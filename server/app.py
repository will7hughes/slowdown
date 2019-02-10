from flask import Flask
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'AC564d22d3107febe17d85e09da776bc8f'
auth_token = '3541c1bab35b353b0b498ef31f299f36'
client = Client(account_sid, auth_token)

# message = client.messages \
#                 .create(
#                      body="Hello World!!!!!",
#                      from_='+13612215440',
#                      to='+13612281152'
#                  )

# print(message.sid)

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    message = client.messages \
                .create(
                     body="Slow DOWN!!! ohwee scary times",
                     from_='+19187791449',
                     to='+19186388675'
                 )

    print(message.sid)
    return 'Hello, World!'