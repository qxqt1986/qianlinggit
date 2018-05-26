var React = require("react");
var ReactDOM = require("react-dom");

export default class EventComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            selectValue:'C',
            radioValue:'B',
            checkValue:'A',
            textValue:'input here ...'

        }
        this.handleSubmit = this.handleSubmit.bind(this),
        this.handleChange = this.handleChange.bind(this),
        this.handleSelect = this.handleSelect.bind(this)
        this.handleText = this.handleText.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('表单提交。。。');
        console.log(e)
    }
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSelect(e){
        console.log(e.target.value)
        this.setState({
            selectValue:e.target.value
        })
    }
    handleText(e){
        console.log(e.target.value);
        this.setState({
            textValue:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange}/><br/>
                    <p>radio</p>
                    <input type="radio" name="goodRadio" id="" defaultChecked value='A'/>
                    <input type="radio" name="goodRadio" id="" value='B'/>
                    <input type="radio" name="goodRadio" id="" value='C'/><br/>
                    <p>checkbox</p>
                    <input type="checkbox" name="googCheckbox" defaultChecked id="" value='A'/>
                    <input type="checkbox" name="googCheckbox" id="" value='B'/>
                    <input type="checkbox" name="googCheckbox" id="" value='C'/><br/>
                    <p>选择区</p>
                    <select name="" id="" value={this.state.selectValue} onChange={this.handleSelect}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    <p>文本区</p>
                    <textarea name="" id="" cols="50" rows="3" value={this.state.textValue} onChange={this.handleText}></textarea><br/>
                    <button type="submit" >提交</button><br/>
                </form>
            </div>
        )
    }
}