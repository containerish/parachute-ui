import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'baseline',
        paddingTop: theme.spacing(10),
        paddingRight: theme.spacing(2),
        justifyContent: 'flex-end',
        // left: 'auto !important'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        // left: 'auto'
    },
    alignRight: {
        left: 'auto'
    }
}));
export const CustomModal = ({ children, show, close }) => {
    const classes = useStyles();

    return (
        <div>
            <Modal
                className={classes.modal}
                open={show}
                onClose={close}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={show}>
                    {children}
                </Fade>
            </Modal>
        </div>
    );
}

// export default CustomModal;