var React = require("react");
var ReactDOM = require("react-dom");
import { hot } from 'react-hot-loader';
import Life from "./lifecycle.jsx";

class AppBox extends React.Component{  
    render() {        
        return (
            <div>           
              <Life/>
            </div>
        )        
    }
}

ReactDOM.render(<AppBox/>, document.getElementById('div1'));
export default hot(module)(AppBox);