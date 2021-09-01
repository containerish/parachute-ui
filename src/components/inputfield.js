import {makeStyles, fade, withStyles} from "@material-ui/core/styles";
import {TextField, InputBase, FormControl, InputLabel} from '@material-ui/core';
import {red} from "@material-ui/core/colors";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '100%'
    },
    label: {
        fontSize: 20,
        color: "black",
        fontWeight: "bolder",
    },
    focused:{
        color: "black !important"
    },
    errorLabel:{
        color: "red",
        fontWeight: "bolder"
    },
    infoLabel:{
        color: "lightblue",
        fontWeight: "bolder"
    }
}))

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(4),
        },
        width: '100%'
    },
    input: {
        borderRadius: 8,
        position: 'relative',
        backgroundColor: "#ced4da",
        border: '2px solid #ced4da',
        fontSize: 16,
        width: '100%',
        height: "28px",
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        '&:focus': {
            boxShadow: `${fade("#152036FF", 0.25)} 0 0 0 0.2rem`,
            borderColor: "#152036FF",

        },
    },

}))(InputBase);

export const TxtField = ({type, isError, errMsg, label, onChange}) => {

    const classes = useStyles();
    return <FormControl className={classes.root}>
        <InputLabel className={classes.label} classes={{focused: classes.focused}} shrink htmlFor="bootstrap-input">
            {label}
        </InputLabel>
        <BootstrapInput type={type} onChange={(event) => onChange(event)} id="bootstrap-input" />
        {
            isError && errMsg !== "" ?
            <label className={classes.errorLabel}> {errMsg} </label>
                : <label className={classes.infoLabel}> {errMsg} </label>
        }
    </FormControl>
}

export const TextFieldWithLogo = ({errMsg, onChange}) => {

    const classes = useStyles();
    return <FormControl className={classes.root}>
        <BootstrapInput onChange={(event) => onChange(event)} id="bootstrap-input">
        </BootstrapInput>
        {
            errMsg !== "" ?
                <label className={classes.errorLabel}> {errMsg} </label>
            : null
        }
    </FormControl>
}