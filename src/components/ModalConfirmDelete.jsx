import { React, forwardRef, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
// import { EventsContext } from '@/utils/contex';
import { addItemToLocalStorage } from '@/utils/itemLocalStorage';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalConfirmDelete({ isOpen, setIsOpen, handleDeleted }) {
    // const events = useContext(EventsContext);
    // useEffect(() => {
    //     addItemToLocalStorage(events)
    // }, [events])
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
                <Button onClick={handleDeleted}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}
