import dotenv from "dotenv";

dotenv.config();

const firebaseApiKey = process.env.FIREBASE_API_KEY;
const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN;
const firebaseDatabaseURL = process.env.FIREBASE_DATABASE_URL;
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET;
const firebaseMessagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
const firebaseAppId = process.env.FIREBASE_APP_ID;
const firebaseMeasurementId = process.env.FIREBASE_MEASUREMENT_ID;

export default ({ config }) => {
  return Object.assign(config, {
    extra: {
      firebaseApiKey,
      firebaseAuthDomain,
      firebaseDatabaseURL,
      firebaseProjectId,
      firebaseStorageBucket,
      firebaseMessagingSenderId,
      firebaseAppId,
      firebaseMeasurementId,

      eas: {
        projectId: "8d245436-4515-4c5b-b2a4-15a9d91d1c05",
      },
    },
  });
};
