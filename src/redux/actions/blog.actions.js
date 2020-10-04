import * as types from "redux/constants/blog.constants";
import api from "redux/api";

const blogsRequest = (pageNum = 1, limit = 10) => async (dispatch) => {
  dispatch({ type: types.GET_BLOGS_REQUEST, payload: null });
  try {
    const res = await api.get(`/blogs?page=${pageNum}&limit=${limit}`);
    dispatch({ type: types.GET_BLOGS_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_BLOGS_FAILURE, payload: error });
  }
};

export const blogActions = {
  blogsRequest,
};
