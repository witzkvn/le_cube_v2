const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACEID,
  environment: "master",
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_AT,
});

export default client;
