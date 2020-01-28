//  API id used by the frontend to interact with the backend
const apiId = ''
export const apiEndpoint = `https://${apiId}.execute-api.us-west-2.amazonaws.com/dev`

export const authConfig = {
  //Auth0 application values
  domain: '*************************',            // Auth0 domain
  clientId: '*************************',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
