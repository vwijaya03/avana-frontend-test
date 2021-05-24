const switchPageReducer = (state = 'dashboard', action) => {
    switch (action.type) {
      case 'SWITCH_PAGE':
        state = action.payload.url;
        return state
      default:
        return state
    }
}

export default switchPageReducer;