/**
 * Simple Example
 */
import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

class SimpleExample extends Component {

    state = {
        open: false
    }

    handleClickOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button  variant="raised" onClick={() => this.handleClickOpen()} color="primary" className="text-white">Open alert dialog</Button>
                <Dialog open={this.state.open} onClose={() => this.handleClose()} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button  variant="raised" onClick={() => this.handleClose()} className="btn-danger text-white"> Disagree </Button>
                        <Button  variant="raised" onClick={() => this.handleClose()} color="primary" className="text-white" autoFocus> Agree </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default SimpleExample;
