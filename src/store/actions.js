const nextTurn = ({commit, state}) => {
  if (state.current) {
    const index = state.players.findIndex(i => i.name === state.current.name)
    const name = state.players[(index + 1) % state.players.length].name
    commit('setCurrentPlayer', name)
  } else if (state.players.length > 0) {
    const name = state.players[0].name
    commit('setCurrentPlayer', name)
  } else {
    commit('removeCurrentPlayer')
  }
  commit('removeTakeover')
}

const createPlayer = ({commit, state}, name) => {
  if (name.length >= 3 && !state.players.find(player => player.name === name)) {
    commit('createPlayer', name)
    if (!state.current) {
      commit('setCurrentPlayer', name)
    }
  } else {
    alert('Player exist')
  }
}

const removePlayer = ({commit, state, dispatch}, name) => {
  const player = state.players.find(i => i.name === name)
  if (player && confirm(`Are you sure you want to remove ${name}?`)) {
    if (state.takeover && state.takeover.name === name) {
      commit('removeTakeover')
    }
    if (state.players.length === 1) {
      commit('removeCurrentPlayer')
      commit('removePlayer', name)
    } else if (state.current && player.name === state.current.name) {
      dispatch('nextTurn')
      commit('removePlayer', name)
    } else {
      commit('removePlayer', name)
    }
  }
}

const changeOrder = ({commit}, name) => {
  commit('changeOrder', name)
}

const correct = ({commit, state, dispatch}) => {
  if (state.takeover) {
    commit('addPoints', {name: state.takeover.name, points: 1})
  } else {
    commit('addPoints', {name: state.current.name, points: 2})
  }
  dispatch('nextTurn')
}
const incorrect = ({commit, state, dispatch}) => {
  if (state.takeover) {
    commit('removeHp', state.takeover.name)
  } else {
    commit('addHp', state.current.name)
  }
  dispatch('nextTurn')
}

const pass = ({commit, state, dispatch}) => {
  if (!state.takeover) {
    commit('addHp', state.current.name)
    dispatch('nextTurn')
  }
}

const toggleTakeover = ({commit, state}, name) => {
  if (state.current && state.current.name === name) {
    return
  }
  if (state.takeover && state.takeover.name === name) {
    commit('removeTakeover')
  } else {
    commit('takeover', name)
  }
}

export default {
  toggleTakeover,
  pass,
  correct,
  incorrect,
  changeOrder,
  nextTurn,
  createPlayer,
  removePlayer,
}