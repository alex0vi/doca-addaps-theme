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

                    {`{"data": ...,  "accessToken": "eyJhbGciOiJIUzI1NiIsInR..........", "refreshToken": null}`}.
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
