import DynamicPrevMap from "./DynamicPrevMap.js"

export default class DynamicNotePrev extends React.Component {
    getComponent() {
        return DynamicPrevMap[this.props.note.type]
    }

    render() {
        
        const Cmp = this.getComponent();
        return <React.Fragment>
            <Cmp
                togglePin={this.props.togglePin}
                onChangeBGColor={this.props.onChangeBGColor}
                delete={this.props.delete}
                onChangeColor={this.props.onChangeColor}
                note={this.props.note}>
            </Cmp>
        </React.Fragment>
    }
}