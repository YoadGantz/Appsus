import DynamicPrevMap from "./DynamicPrevMap.js"

export default class DynamicNotePrev extends React.Component {
    getComponent() {
        return DynamicPrevMap[this.props.note.type]
    }



    render() {
        const Cmp = this.getComponent();
        return <React.Fragment>
            <Cmp delete={this.props.delete} note={this.props.note}></Cmp>
        </React.Fragment>
    }
}