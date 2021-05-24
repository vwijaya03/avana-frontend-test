export const switchPageAction = (url) => {
    return {
      type: 'SWITCH_PAGE',
      payload: {
        url: url
      }
    }
}