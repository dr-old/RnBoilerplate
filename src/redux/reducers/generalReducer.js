import {types} from '../actions/types';

const initialState = {
  modalList: {
    id: '',
    status: false,
    detail: [],
  },
};

// eslint-disable-next-line no-undef
export default generalReducer = (state = initialState, action) => {
  switch (action.type) {
    // REDUCER MODALLIST
    case 'SET_MODAL_LIST':
      return {
        ...state,
        modalList: {
          ...state.modalList,
          id: action.id,
          status: action.status,
          detail: action.detail,
        },
      };

    default:
      return state;
  }
};
