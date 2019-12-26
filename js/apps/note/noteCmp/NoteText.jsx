import NoteEditControl from "./NoteEditControl.jsx";

export default class NoteText extends React.Component {

    render() {
        console.log('?');
        
        let style = this.props.note.style || 'none';
        let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
        let color = style.color || 'black';
        return <li style={{backgroundColor: bgc, color: color}}>
            {this.props.note.info.txtInput}
            <NoteEditControl 
                delete={this.props.delete} note={this.props.note}
                onChangeBGColor={this.props.onChangeBGColor}
                onChangeColor={this.props.onChangeColor}
            ></NoteEditControl>
        </li>

    }
}