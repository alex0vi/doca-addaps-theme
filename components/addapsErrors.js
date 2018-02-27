const React = require('react');
const Component = require('react-pure-render/component');
const styles = {
    "addapsErrors": {
        color: "",
        padding: "30px 0"
    }
}

/* This is a placeholder for introductory content.  It is connected to the table of contents by the getting-started.json file in the root directory of the generated app.  You will want to customize or replace this! */
class AddapsErrors extends Component {

    render() {

        return (<article className="section api-section">
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
                </ul>
            </article>
        );
    }
}

module.exports = AddapsErrors;
