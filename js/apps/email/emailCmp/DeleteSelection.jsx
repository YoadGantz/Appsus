export default class DeleteSelection extends React.Component {
    onDeleteSelected = () => {
        this.props.deleteSelected();
    }

    render() {
        return <img title="Delete selected" className="btn" onClick={this.onDeleteSelected} height="20px" src="./imgs/icons/delete.svg" />
    }
}