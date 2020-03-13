let userAccessToken;
const clientId = d4a727f53f984fe69402e0f4d70e1d74;
const redirectURI = url("http://localhost:3000/"); 

const Spotify = {
    //Revisar esto completo
   getAccessToken() {
     if (userAccessToken) {
         return userAccessToken;
     } else {

        //check for access token match
         const accessToken = window.location.href.match(/access_token=([^&]*)/);
         const expiresIn = window.location.href.match(/expires_in=([^&]*)/);

         if(accessToken && expiresIn) {
             userAccessToken = accessToken[1];
             const expires = Number(expiresIn[1]);
             //Esto limpie los parametros permitiendo acceder a un nuevo access token cuando el otro expire
             windows.setTimeout(() => userAccessToken = '', expiresIn * 1000);
             window.history.pushState('Access Token', null, '/');
             return userAccessToken;
         } else {
             const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
             window.location = accessUrl;
         }
     }
   }
}

export default Spotify;