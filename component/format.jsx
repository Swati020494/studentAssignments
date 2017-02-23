import React from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { ButtonToolbar, Label } from 'react-bootstrap';

class Format extends React.Component {
	render() {
      return (
        <div id="wrapper">
          <Button className="btn1"><Glyphicon glyph="menu-hamburger" /></Button>
          <label className="lbl">Show Menu</label>
          <Button className="btn2"><Glyphicon glyph="shopping-cart" /></Button>
         </div>
      );
   }
}
export default Format;