export default class DeleteSelection extends React.Component {
    onDeleteSelected = () => {
        this.props.deleteSelected();
    }

    render() {
        return <img className="btn" onClick={this.onDeleteSelected} height="10px" src="../../../imgs/icons/delete.svg" />
    }
}