export const selectUserModule = (state) => state.user;

export const selectUserIds = (state) => selectUserModule(state).ids;
export const selectUserNameById = (state, id) =>
  selectUserModule(state).entities[id].name;
