import React, {Component} from 'react'

class TestedComponentsClassComponentForTest extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.props.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
    return (
        <div>
            {!this.state.editMode &&
            <div>
                <span onClick={this.activateEditMode}>{this.props.status || "empty status"}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} value={this.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
            </div>
            }
        </div>
    )
    }
}

export default TestedComponentsClassComponentForTest;