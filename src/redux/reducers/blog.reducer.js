import * as types from "../constants/blog.constants";

const initialState = {
  blogs: [],
  totalPageNum: 1,
  selectedBlog: null,
  loading: false,
  submitLoading: false,
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BLOGS_REQUEST:
    case types.GET_SINGLE_BLOG_REQUEST:
    case types.CREATE_BLOG_REQUEST:
    case types.UPDATE_BLOG_REQUEST:
    case types.DELETE_BLOG_REQUEST:
      return { ...state, loading: true };

    case types.GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: payload.blogs,
        totalPageNum: payload.totalPages,
        loading: false,
      };

    case types.GET_BLOGS_FAILURE:
    case types.GET_SINGLE_BLOG_REQUEST_FAILURE:
    case types.CREATE_BLOG_SUCCESS:
    case types.CREATE_BLOG_FAILURE:
    case types.UPDATE_BLOG_FAILURE:
    case types.DELETE_BLOG_FAILURE:
      return { ...state, loading: false };

    case types.GET_SINGLE_BLOG_REQUEST_SUCCESS:
      return { ...state, selectedBlog: payload, loading: false };

    case types.CREATE_REVIEW_REQUEST:
    case types.SEND_REACTION_REQUEST:
      return { ...state, submitLoading: true };

    case types.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        selectedBlog: {
          ...state.selectedBlog,
          reviews: [...state.selectedBlog.reviews, payload],
        },
        submitLoading: false,
      };
    case types.CREATE_REVIEW_FAILURE:
    case types.SEND_REACTION_FAILURE:
      return { ...state, submitLoading: false };

    case types.BLOG_REACTION_SUCCESS:
      return {
        ...state,
        selectedBlog: { ...state.selectedBlog, reactions: payload },
        submitLoading: false,
      };

    case types.REVIEW_REACTION_SUCCESS:
      return {
        ...state,
        selectedBlog: {
          ...state.selectedBlog,
          reviews: [
            ...state.selectedBlog.reviews.map((review) => {
              if (review._id !== payload.reviewId) return review;
              return { ...review, reactions: payload.reactions };
            }),
          ],
        },
        submitLoading: false,
      };

    case types.UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        selectedBlog: payload,
        loading: false,
      };
    case types.DELETE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedBlog: {},
      };

    default:
      return state;
  }
};

export default blogReducer;
