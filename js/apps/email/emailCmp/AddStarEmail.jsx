export default class AddStarSelection extends React.Component {

    updateSelected = () => {
        this.props.updateIsStarredSelected()
    }

    render() { 
        return <div onClick={this.updateSelected}> {this.props.selectedUnStar ? "Add a star" : "Remove a star"}  </div >
    }
}