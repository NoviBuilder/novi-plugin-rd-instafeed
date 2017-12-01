const RadioGroup = novi.ui.radioGroup;
const Input = novi.ui.input;
const Component = novi.react.Component;
const React = novi.react.React;
const Language = novi.language;
export default class Body extends Component{
    constructor(props){
        super(props);

        let name = novi.element.getAttribute(props.element, 'data-instafeed-user') || null;
        let tagName = novi.element.getAttribute(props.element, 'data-instafeed-tagname') || null;
        let type = this._getInstagramType(props.element);

        this.state = {
            type: type,
            initType: type,
            name,
            initName: name,
            tagName,
            initTagName: tagName,
            element: props.element
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleRadioButtonClick = this._handleRadioButtonClick.bind(this);
        this.messages = Language.getDataByKey("novi-plugin-rd-instafeed");
    }

    render(){
        return (
            <div className="instagram-plugin-wrap" style={{"padding": "0 12px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "height": "100%", "color": "#6E778A"}}>
                <p className="novi-label" style={{"marginTop": "0"}}>
                    {this.messages.editor.body.postType}
                </p>
                <RadioGroup options={["Account", "Tag"]} value={this.state.type} onChange={this._handleRadioButtonClick}/>
                {this._renderSettingsInput()}
            </div>
        )
    }

    _getInstagramType(element){
        let type = novi.element.getAttribute(element, 'data-instafeed-get');
        if (type === "user") return "Account";
        if (type === "tagged") return "Tag";
        return null
    }

    _handleRadioButtonClick(value){
        this.setState({type: value})
    }

    _renderSettingsInput(){
        return (
            <div>
                <p className="novi-label" style={{marginTop: 15}}>
                    {this.state.type === "Account" ? this.messages.editor.body.user : this.messages.editor.body.tag}
                </p>
                <Input onChange={this._handleChange} value={this.state.type === "Account" ? this.state.name || "" : this.state.tagName || ""}/>
            </div>
        )
    }


    _handleChange(e){
        let value = e.target.value;
        if (this.state.type === "Account"){
            this.setState({
                name : value
            });
        }
        else {
            this.setState({
                tagName : value
            });
        }
    }
}