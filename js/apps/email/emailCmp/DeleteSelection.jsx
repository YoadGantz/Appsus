export default class DeleteSelection extends React.Component {
    onDeleteSelected = () => {
        this.props.deleteSelected();
    }

    render() {
<<<<<<< HEAD
        return <img title="Delete selected" className="btn" onClick={this.onDeleteSelected} height="20px" src="./imgs/icons/delete.svg" />
=======
        return <img title="Delete selected" className="btn" onClick={this.onDeleteSelected} height="20px" src="./../../../imgs/icons/delete.svg" />
>>>>>>> 3eab684f469d0a65d49d6dec7f6c3c27729f5191
    }
}
