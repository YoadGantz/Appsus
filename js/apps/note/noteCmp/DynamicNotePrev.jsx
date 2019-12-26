
import DynamicPrevMap from "./DynamicPrevMap.jsx"

export default class DynamicNotePrev extends React.Component {
    getComponent() {
        return DynamicPrevMap[this.props.note.type]
    }

    render() {
        const Cmp = this.getComponent();        
        return <React.Fragment>
            <Cmp note={this.props.note}></Cmp>
        </React.Fragment>
    }
}