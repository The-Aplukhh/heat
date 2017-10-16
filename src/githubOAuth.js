//stolen from https://gist.github.com/paulbbauer/2add0bdf0f4342df48ea
import { githubAuth } from "./secrets.js";

const BrowserWindow = window.require('electron').remote.BrowserWindow;
var querystring = require('querystring');
var https = require("https");

// Your GitHub Applications Credentials
var options = githubAuth;
export function loginGithub() {

    var authWindow = new BrowserWindow({ width: 800, height: 600, show: false, 'node-integration': false });
    var githubUrl = 'https://github.com/login/oauth/authorize?';
    var authUrl = githubUrl + 'client_id=' + options.client_id + '&scope=' + options.scopes;
    authWindow.loadURL(authUrl);
    authWindow.show();

    authWindow.webContents.on('did-get-redirect-request', function(event, oldUrl, newUrl) {
        var raw_code = /code=([^&]*)/.exec(newUrl) || null,
        code = (raw_code && raw_code.length > 1) ? raw_code[1] : null,
        error = /\?error=(.+)$/.exec(newUrl);
        
        if (code || error) {
            // Close the browser if code found or error
            authWindow.close();
        }
        
        // If there is a code in the callback, proceed to get token from github
        if (code) {
            console.log("code recieved: " + code);
            
            var postData = querystring.stringify({
                "client_id" : options.client_id,
                "client_secret" : options.client_secret,
                "code" : code
            });
            
            var post = {
                host: "github.com",
                path: "/login/oauth/access_token",
                method: "POST",
                headers: 
                { 
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': postData.length,
                    "Accept": "application/json"
                }
            };
            
            var req = https.request(post, function(response){
                var result = '';
                response.on('data', function(data) {
                    result = result + data;
                });
                response.on('end', function () {
                    var json = JSON.parse(result.toString());
                    console.log("access token recieved: " + json.access_token);
                    if (response && response.ok) {
                        // Success - Received Token.
                        // Store it in localStorage maybe?
                        console.log(response.body.access_token);
                    }
                });
                response.on('error', function (err) {
                    console.log("GITHUB OAUTH REQUEST ERROR: " + err.message);
                });
            });
            
            req.write(postData);
            req.end();
        } else if (error) {
            alert("Oops! Something went wrong and we couldn't log you in using Github. Please try again.");
        }
    });

    // Reset the authWindow on close
    authWindow.on('close', function() {
        authWindow = null;
    }, false);

};