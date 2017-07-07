import * as types from './mutation-types';

const setAuthorized = ({ commit }) => {
  commit(types.SET_AUTHORIZED_TRUE);
};

const setUnauthorized = ({ commit }) => {
  commit(types.SET_AUTHORIZED_FALSE);
};

export default { setAuthorized, setUnauthorized };

