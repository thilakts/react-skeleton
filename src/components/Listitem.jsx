var React = require('react');
var PropTypes = React.PropTypes;

var Listitem = React.createClass({

  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }

});

module.exports = Listitem;
