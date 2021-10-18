import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	outlineButtonStyle: {
		color: "black",
		border: "#cbd8e7 solid 2px",
		backgroundColor: "#cbd8e7",
		borderRadius: "15px",
		width: "250px",
		fontWeight: "bolder",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "#cbd8e7",
			color: "black",
		}
	},
	solidButtonStyle: {
		width: 190,
		backgroundColor: "#cbd8e7",
		// border: "1px solid #152036FF",
		margin: "35px 10px 10px",
		height: 40,
		fontSize: 12,
		fontWeight: "bold",
		borderRadius: 15,
		padding: "0 30px 0 30px",
		boxSizing: "border-box",
		color: "#000000",
		cursor: "pointer",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "#fff"
		}
	},
	solidButton2Style: {
		width: 190,
		backgroundColor: "#152036FF",
		// border: "1px solid #152036FF",
		margin: "35px 10px 10px",
		height: 40,
		fontSize: 12,
		fontWeight: "bold",
		borderRadius: 15,
		padding: "0 30px 0 30px",
		boxSizing: "border-box",
		color: "#aeb7c6",
		cursor: "pointer",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "#aeb7c6",
			color: "black",
		}
	},

}));

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: '#A4C7D2',
		color: 'black',
		height: '80%',
		width: '100%',
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(15),
		fontWeight: 'bold',
		border: '1px solid #A4C7D2',
	},
}))(Tooltip);

export const OutlinedButton = ({ label, onClick }) => {
	const classes = useStyles();
	return (
		<Button className={classes.outlineButtonStyle} onClick={onClick} variant="outlined">{label}</Button>
	)
}

export const SolidButton = ({ label, onClick }) => {
	const classes = useStyles();
	return (
		<Button className={classes.solidButtonStyle} onClick={() => onClick()} variant="contained">{label}</Button>
	)
}
export const SolidButton2 = ({ disabled, label, onClick }) => {
	const classes = useStyles();
	return (
		<Button disabled={disabled} className={classes.solidButton2Style} onClick={onClick} variant="contained">{label}</Button>
	)
}
