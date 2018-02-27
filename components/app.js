const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const Component = require('react-pure-render/component');
const Sidebar = require('./sidebar');
const Schema = require('./schema');
const AddapsIntroduction = require('./addapsIntroduction');
const AddapsErrors = require('./addapsErrors');

class App extends Component {

  static propTypes = {
    schemas: ImmutablePropTypes.list.isRequired,
    config: React.PropTypes.object,
  };

  render() {
    const { schemas, config } = this.props;

    return (
      <div id="wrapper">
        <Sidebar schemas={schemas} />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <img className="img-addaps" src="https://www.addaps.com/assets/img/logo_black.png"/>
                <h1>{config.title}</h1>
                 <AddapsIntroduction />
                 <AddapsErrors />
                {schemas
                  .filter(schema => !schema.get('cfHidden'))
                  .valueSeq()
                  .map(schema => <Schema key={schema.get('id')} schema={schema} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = App;
