
import DynamicPrevMap from "./DynamicPrevMap.js"

export default class DynamicNotePrev extends React.Component {
    state = {
        componentName: 'bye',
        userName: 'Hadas'
    }

    getComponent() {
        return DynamicPrevMap[this.state.componentName]
    }

    setComponent = (ev)=>{
        this.setState({componentName: ev.target.value})
    }

    render() {
        const Cmp = this.getComponent();

        return <React.Fragment>
            <Cmp name={this.state.userName}></Cmp>
            <select onChange={this.setComponent}>
                <option value="noteText">bye</option>
            </select>
        </React.Fragment>
        // switch (this.state.componentName) {
        //     case 'hello':
        //         return <Hello name={this.state.userName}></Hello>
        //     case 'bye':
        //         return <Bye name={this.state.userName}></Bye>
        //     case 'hello':
        //         return <Welcome name={this.state.userName}></Welcome>
        // }
    }
}