var React = require("react");
var ReactDOM = require("react-dom");

// 通过ref获得表单元素的值
export default class EventComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'input Value',
            selectValue:'C',
            radioValue:'B',
            checkValue:'A',
            textValue:'input here ...'

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadio = this.handleRadio.bind(this)
    }
    handleRadio(e){
        this.setState({
            radioValue:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        var formDate = {
            inputV : this.refs['goodInput'].value,
            selectV : this.refs['goodSelect'].value,
            radioV : this.state.radioValue
        }
        console.log(formDate)
    }
   
    render(){
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input ref='goodInput' type="text" defaultValue={this.state.inputValue} /><br/>
                    <p>radio</p>
                    <input type="radio" name="goodRadio" onChange={this.handleRadio} id="" value='A'/>
                    <input type="radio" name="goodRadio" onChange={this.handleRadio} id="" value='B'/>
                    <input type="radio" name="goodRadio" onChange={this.handleRadio} id="" value='C'/><br/>
                    <p>checkbox</p>
                    <input type="checkbox" name="googCheckbox" defaultChecked id="" value='A'/>
                    <input type="checkbox" name="googCheckbox" id="" value='B'/>
                    <input type="checkbox" name="googCheckbox" id="" value='C'/><br/>
                    <p>选择区</p>
                    <select ref="goodSelect" id="" defaultValue={this.state.selectValue}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    <p>文本区</p>
                    <textarea ref='goodText' id="" cols="50" rows="3" value={this.state.textValue} onChange={this.handleText}></textarea><br/>
                    <button type="submit" >提交</button><br/>
                </form>
            </div>
        )
    }
}