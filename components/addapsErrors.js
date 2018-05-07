const React = require('react');
const Component = require('react-pure-render/component');
const styles = {
    "addapsErrors": {
        padding: "30px 0"
    }
}

/* This is a placeholder for introductory content.  It is connected to the table of contents by the getting-started.json file in the root directory of the generated app.  You will want to customize or replace this! */
class AddapsErrors extends Component {

    render() {

        return (
            <article className="section api-section">
                <h2 id="addapsErrors" style={ styles.addapsErrors }>
                    Errors
                </h2>
                <ul>
                    <li id="errors/UNSUPPORTED_ERROR">
                        UNSUPPORTED_ERROR: Something went wrong
                    </li>
                    <li id="errors/FORMAT_VALIDATION_ERROR">
                        FORMAT_VALIDATION_ERROR: Some format validation error in the body or url request
                    </li>
                    <li id="errors/INVALID_EMAIL_FORMAT">
                        INVALID_EMAIL_FORMAT: The email is invalid
                    </li>
                    <li id="errors/EMAIL_DUPLICATE">
                        EMAIL_DUPLICATE: The email already exists
                    </li>
                    <li id="errors/PATCH_BOARD_WRONG_FORMAT">
                        PATCH_BOARD_WRONG_FORMAT: state and contents should come in pairs, and with the same length
                    </li>
                    <li id="errors/INVALID_ASPECT_RATIO">
                        INVALID_ASPECT_RATIO: The image aspect ratio is not correct
                    </li>
                    <li id="errors/IMAGE_FORMAT_UNSUPPORTED">
                        IMAGE_FORMAT_UNSUPPORTED: Image formats are not supported
                    </li>
                    <li id="errors/IMAGE_TOO_LARGE">
                        IMAGE_TOO_LARGE: The maximum image size is 2 MB
                    </li>
                    <li id="errors/OLD_PASSWORD_INCORRECT">
                        OLD_PASSWORD_INCORRECT: The old password is not correct
                    </li>
                    <li id="errors/NEW_PASSWORD_INCORRECT">
                        NEW_PASSWORD_INCORRECT: The new password is not correct
                    </li>
                    <li id="errors/WRONG_CREDENTIALS">
                        WRONG_CREDENTIALS: Check the email or password field
                    </li>
                    <li id="errors/WRONG_BOARD_REPORT_TYPE">
                        WRONG_BOARD_REPORT_TYPE: Check the {"<type>"} field
                    </li>
                    <li id="errors/CAN_ONLY_SET_STAR_PERSONNAL_OR_PUBLIC_BOARD">
                        CAN_ONLY_SET_STAR_PERSONNAL_OR_PUBLIC_BOARD: The board is not public and it not owned by this user neither
                    </li>
                    <li id="errors/CANNOT_OPENED_FOLDER_IN_TRASH">
                        CANNOT_OPENED_FOLDER_IN_TRASH: Folder cannot be trash, you could restore if you want
                    </li>
                    <li id="errors/TOKEN_EXPIRED">
                        TOKEN_EXPIRED: This token has expired
                    </li>
                    <li id="errors/TOKEN_EXPIRED_FOREVER">
                        TOKEN_EXPIRED_FOREVER: Token can no longer be refreshed
                    </li>
                    <li id="errors/TOKEN_INVALID">
                        TOKEN_INVALID: This token is not valid
                    </li>
                </ul>
            </article>
        );
    }
}

module.exports = AddapsErrors;
