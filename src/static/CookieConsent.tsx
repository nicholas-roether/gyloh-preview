import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import DefaultButton from "../common/DefaultButton";

const CONSENT_COOKIE = "cookie-consent";

const CookieConsent: React.FC = props => {
	const [cookies, setCookie] = useCookies([CONSENT_COOKIE]);
	const [open, setOpen] = useState<boolean>(cookies[CONSENT_COOKIE] !== "true");
	const onClose = () => {
		setCookie(CONSENT_COOKIE, "true");
		setOpen(false);
	}
	return (
		<Dialog open={open} onClose={onClose} aria-labelledby="cookie-consent-dialog-title">
			<DialogTitle id="cookie-consent-dialog-title">Diese Seite benutzt Cookies</DialogTitle>
			<DialogContent>
				Diese Seite benutzt Cookies. 
				Durch das Nutzen dieser Seite stimmen sie unseren <Link to="/datenschutz" onClick={onClose}>Datenschutz-Bestimmungen</Link> zu.
			</DialogContent>
			<DialogActions>
				<DefaultButton variant="outlined" to="/datenschutz" onClick={onClose}>Info</DefaultButton>
				<DefaultButton onClick={onClose}>Ok</DefaultButton>
			</DialogActions>
		</Dialog>
	);
}

export default CookieConsent;