import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Modal} from 'antd';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
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

const styles = {
    modal: {
        width: "100% !important",
    }
}
export const CustomModal = ({ children, show, close }) => {

    return (
        <Modal
            style={styles.modal}
            visible={show}
            onOk={close}
            closable={false}
            onCancel={close}
            footer={null}
        >
            {children}
        </Modal>
    );
}

