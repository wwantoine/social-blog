import * as types from "redux/constants/route.constants";
import api from "redux/api";
import { toast } from "react-toastify";

const redirect = (link) => ({ type: types.SET_REDIRECT_TO, payload: link });

const removeRedirectTo = () => ({
	type: types.REMOVE_REDIRECT_TO,
	payload: null,
});

export const routeActions = {
	redirect,
	removeRedirectTo,
};
