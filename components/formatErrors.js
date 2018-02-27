const React = require('react');
const Component = require('react-pure-render/component');

class FormatErrors extends Component {

  render() {
    const { errorName } = this.props;

    return (
        <a href={ "#errors/"+errorName } >{ errorName }<br/></a>
    );
  }
}

module.exports = FormatErrors;
