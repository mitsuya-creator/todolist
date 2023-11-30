import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalConfirmDelete({ isOpen, setIsOpen }) {
    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setIsOpen(false)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button>Agree</Button>
            </DialogActions>
        </Dialog>
    );
}
