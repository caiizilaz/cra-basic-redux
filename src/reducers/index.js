const initialState = {
  angular: {
    count: 0,
    class: 'danger',
    name: 'Angular'
  },
  react: {
    count: 0,
    class: 'info',
    name: 'React'
  },
  vue: {
    count: 0,
    class: 'success',
    name: 'Vue'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_REACT':
      return Object.assign({}, state, {
        react: {
          ...state.react,
          count: state.react.count + 1
        }
      })
    case 'VOTE_ANGULAR':
      return Object.assign({}, state, {
        angular: {
          ...state.angular,
          count: state.angular.count + 1
        }
      })
    case 'VOTE_VUE':
      return Object.assign({}, state, {
        vue: {
          ...state.vue,
          count: state.vue.count + 1
        }
      })
    default:
      return state
  }
}