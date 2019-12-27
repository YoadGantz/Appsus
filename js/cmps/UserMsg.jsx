import eventBusService from "../apps/services/eventBusService.js";

export default class UserMsg extends React.Component {
    eventKiller = null;
    componentDidMount() {
        this.eventKiller = eventBusService.on('emailSent', () => {
            Swal.fire(`Mail sent successfully`)
        })
        this.eventKiller = eventBusService.on('delete', () => {
            Swal.fire('Deleted')
        })
        this.eventKiller = eventBusService.on('addNote', () => {
            Swal.fire('Note added successfully')
        })
    }

    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        return null;
    }
} 