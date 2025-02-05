// // environment.ts
// export const environment = {
//   production: false, // this is true in the production environment
//   AUTH0_DOMAIN: "mijnbachelorproef.eu.auth0.com",
//   AUTH0_CLIENT_ID: "DoC3fmUZ8j0Caomgjn7QPb2tDceVDPnt",
//   AUTH0_AUDIENCE: "https://localhost:7026", 
//   redirectUri: "https://localhost:4200/callback",
//   api_url: "https://gwbpapi.azurewebsites.net/api/",
//   home_url: "http://localhost:4200",
// };

// environment.ts
export const environment = {
  production: true, // this is true in the production environment
  AUTH0_DOMAIN: "mijnbachelorproef.eu.auth0.com",
  AUTH0_CLIENT_ID: "DoC3fmUZ8j0Caomgjn7QPb2tDceVDPnt",
  AUTH0_AUDIENCE: "https://gwbpapi.azurewebsites.net/",
  redirectUri: "https://lively-glacier-082d11d03.4.azurestaticapps.net/callback",
  api_url: "https://gwbpapi.azurewebsites.net/api/",
  home_url: "https://lively-glacier-082d11d03.4.azurestaticapps.net/",
};