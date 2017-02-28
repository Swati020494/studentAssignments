import React from 'react';
import { Button,Collapse,Well,Glyphicon } from 'react-bootstrap';
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open : false
    };
  }

  render() {
    return (
      <div>
        {console.log("abc")}
        <Button  onClick={ ()=> this.setState({ open: !this.state.open })}> <Glyphicon glyph="comment" /></Button>
         <Collapse in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Collapse>      
      </div>

    );
  }
}
export default Footer;