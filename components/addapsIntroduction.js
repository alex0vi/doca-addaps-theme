const React = require('react');
const Component = require('react-pure-render/component');

const styles = {
    "gettingStarted": {
        padding: "30px 0"
    }
}

class AddapsIntroduction extends Component {

    render() {
        return (
            <article className="section api-section">
                <p><small>Last modified: {(new Date(LAST_MODIFIED)).toDateString()}</small></p>
                <h2 id="gettingStarted" style={ styles.gettingStarted }>Getting started</h2>

                <p>The base endpoint is : https://develop.addaps.com/api/v2 .</p>
                <p>All endpoints return an JSON object.</p>
                <p>All endpoints return the request response inside a field called "data".</p>
                <h2 style={ styles.gettinStarted }>There are 3 endpoints for login. These are called "GET session endpoints".</h2>
                <ul>
                    <li>POST "/session"</li>
                    <li>POST "/guest_mode_session"</li>
                    <li>POST "/session/facebook"</li>
                </ul>
                <p>
                    The user access token and refresh token is returned inside the "initialData" called accessToken and refreshToken respectively.
                    At the moment the accessToken and refreshToken is only returned in "/session", "session/facebook", "/signup", "/signup/facebook", and /token".
                </p>
                <p>
                    The endpoint "guest_mode_session" return accessToken and refreshToken like:

                    {`{"data": ...,  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiL2JvYXJkcy86aWQoWzAtOV0rKS5HRVQiLCIvYm9hcmRzLzppZChbMC05XSspL3B1YmxpY1VybC5HRVQiLCIvYm9hcmRzLzppZChbMC05XSspL3JlcG9ydC5QT1NUIiwiL2JvYXJkcy9yZXBvcnRUeXBlcy5HRVQiLCIvY291bnRyaWVzLkdFVCIsIi9kZWZhdWx0cy9xdWlja0xpbmtzLkdFVCIsIi9wb2lzLkdFVCIsIi9zZWFyY2hBdXRvQ29tcGxldGUuR0VUIiwiL3Nlc3Npb24uUE9TVCIsIi9zZXNzaW9uL2ZhY2Vib29rLlBPU1QiLCIvc2Vzc2lvbi9ndWVzdF9tb2RlX3Nlc3Npb24uR0VUIiwiL3NpZ251cC5QT1NUIiwiL3NpZ251cC9mYWNlYm9vay5QT1NUIiwiL3VzZXIvZmVlZHMvZGlzY292ZXIuR0VUIiwiL3VzZXJzLkdFVCIsIi91c2Vycy86aWQoWzAtOV0rKS5HRVQiXSwiaWF0IjoxNTI0NjQzMDM1fQ.2Sf-Tkz8uLNrIxBxFBaB4btEwRVM9a6VF-9eKQAR000", "refreshToken": null}`}.
                </p>

                <h2 style={ styles.gettinStarted }>All requests should contain two headers:</h2>
                <ul>
                    <li>Accept: application/json</li>
                    <li>Content-Type: application/json</li>
                </ul>
                <h2 style={ styles.gettinStarted }>The majority of endpoints need the Authorization header.</h2>

                <ul>
                    <li>Authorization: {"Bearer <accessToken>"}</li>
                </ul>
                <h2 style={ styles.gettinStarted }>The following combinations of method and endpoints don't need the token header.</h2>
                <ul>
                    {/* <li>GET /user/socketSession</li>
                    <li>DELETE /user/socketSession</li>
                    <li>DELETE /rooms/bySocket/</li>
                    <li>GET /rooms/bySocket/</li>
                    <li>POST /forgotPassword</li>
                    <li>/emailSubscriptions</li>
                    <li>/defaults/quickLinks</li>
                    <li>GET /boards</li>
                    <li>GET /users/reportTypes</li>
                    <li>GET /countries</li>
                    */}
                    <li>/signup</li>
                    <li>/session</li>
                    <li>/docs</li>
                    <li>POST /token</li>
                    <li>GET /guest_mode_session</li>
                </ul>
                <h2 style={ styles.gettinStarted }>
                    HTTP status codes.
                </h2>
                <ul>
                    <li>200 return code is used when the request is successfully received, understood, and accepted.</li>
                    <li>401 return code is used when the request is unauthorized. The token don't have the correct permissions.</li>
                    <li>415 return code is used to indicate an image format unsupported.</li>
                    <li>412 return code is used to indicate an invalid aspect ratio.</li>
                    <li>404 return code is used when the resource is not found. Also it's used by default at the moment.</li>
                    <li>500 return code is used when an internal server error happen.</li>
                </ul>
            </article>
        );
    }
}

module.exports = AddapsIntroduction;
