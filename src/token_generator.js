require('dotenv').load();

const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

function tokenGenerator(identity, room) {
  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
 //Account SID as the username, and your Auth Token as the password
  const token = new AccessToken(
    "AC460ea806046bc7fd79506d16df025306",
    "SKeef06befece23f8e7e061189ac2937b9",
    "AAHDei5fjkEwfxFI1X5483GJxVzejc31"
  );

  // Assign identity to the token
  token.identity = identity;

  // Grant the access token Twilio Video capabilities
  const grant = new VideoGrant();
  grant.room = room;
  token.addGrant(grant);

  // Serialize the token to a JWT string
  return token.toJwt();
}

module.exports = tokenGenerator;


