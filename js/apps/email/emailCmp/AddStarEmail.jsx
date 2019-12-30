export default class AddStarSelection extends React.Component {

    updateSelected = () => {
        this.props.updateIsStarredSelected()
    }

    render() { 
        return <div className="btn" onClick={this.updateSelected}> {this.props.selectedUnStar ? <img className="star" title="Add star" height="20px" src="../../../imgs/icons/star-filled.svg"/> : <img title="Remove star" height="20px" src="../../../imgs/icons/star.svg"/>}  </div >
    }
}