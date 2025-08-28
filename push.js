const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
publicKey: 'BCis9afWX-SRKt021KIJwH7M2I67P0dlDBEvIdaeRCRj6GbPMqwG0V9rR6XPmaPCDmOT6oVObmYLEMba3oW5sMU',
  privateKey: 'dTraF3I4r-hbZ0tE3CYVYFGoz1woSrN-O5XpPJNOI_c'
};

webpush.setVapidDetails(
  'mailto:speedygonzales77@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fwgEVvJ1RE4:APA91bH-JZcANkgu8KgnZT41OA41skQJ-SQyk-4SxsAhSZ3VLNJOwoWwcwSwO264EEe2nEEJgwKkKaS6xU3iTeKH5yQt61pFymOLipYCHTdj4IElBWHmExgM3DPPWhtC7NU6VMiF3GXl","expirationTime":null,"keys":{"p256dh":"BJB5jBsLsWf_yJQN0dGirgO0-UjbmKUllqf4U1QW1hsqFspzcbJCMraJrhK5aPe4joxXODDOXq7SAPBqHb_TUXQ","auth":"4aIya2I14fWAIq8OS6F_-A"}}