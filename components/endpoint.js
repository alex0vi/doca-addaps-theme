const React = require('react');
const ObjectDefinitionTable = require('./objectDefinitionTable');
const MarkdownPreview = require('react-marked-markdown').MarkdownPreview;
const FormatErrors = require('./formatErrors');
const ImmutablePropTypes = require('react-immutable-proptypes');
const Component = require('react-pure-render/component');

class Endpoint extends Component {

  static propTypes = {
    link: ImmutablePropTypes.map.isRequired,
  };

  render() {
    const { link } = this.props;

    return (
      <section key={link.get('html_id')} id={link.get('html_id')} className="list-group-item">
        <h3>
          <div className="label label-success">{link.get('method')}</div>{' '}
          <div className="endpoint-title">{link.get('title')}</div>
        </h3>
        {link.get('description') && <MarkdownPreview value={link.get('description')} />}
        <pre>
          {link.get('method')} {link.get('uri')}
        </pre>

        {link.getIn(['parameters', 'required_props', 0]) &&
          <div>
            <h4>Required parameters</h4>
            <ObjectDefinitionTable
              definitions={
                link.getIn(['parameters', 'all_props']).filter((val, key) =>
                  link.getIn(['parameters', 'required_props']).indexOf(key) > -1
                )
              }
              contextId={link.get('title')}
              fieldPointer="/properties"
            />
          </div>
        }

        {link.getIn(['parameters', 'optional_props', 0]) &&
          <div>
            <h4>Optional parameters</h4>
            <ObjectDefinitionTable
              definitions={
                link.getIn(['parameters', 'all_props']).filter((val, key) =>
                  link.getIn(['parameters', 'optional_props']).indexOf(key) > -1
                )
              }
              contextId={link.get('title')}
              fieldPointer="/properties"
            />
          </div>
        }

        <h4>cURL</h4>
        <div>
          <pre>{link.get('curl')}</pre>
        </div>

        <h4>Response</h4>
        <div>
          <pre>{link.get('response')}</pre>
        </div>

        <h4>Errors</h4>
        <div>
          <pre>
            {
                 (link.get('errors'))?link.get('errors').map( (val, index) => <FormatErrors key={index} errorName={ val } /> ): ''
             }
          </pre>
        </div>
      </section>
    );
  }

}

module.exports = Endpoint;
