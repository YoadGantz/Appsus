
import DynamicPrevMap from "./DynamicPrevMap.js"

export default class DynamicNotePrev extends React.Component {
    getComponent() {
        return DynamicPrevMap[this.props.note.type]
    }

    setComponent = (ev)=>{
        this.setState({componentName: ev.target.value})
    }

    render() {
        const Cmp = this.getComponent();

        return <React.Fragment>
            <Cmp note={this.props.note}></Cmp>
        </React.Fragment>
    }
}