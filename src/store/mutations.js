const removePlayer = (state, name) => {
  state.players = state.players.filter(i => i.name !== name)
}
const addPoints = (state, {name, points}) => {
  const player = state.players.find(i => i.name === name)
  player.score += points + player.hp
  player.hp = 0
}

const removeHp = (state, name) => {
  const player = state.players.find(i => i.name === name)
  player.hp = 0
}

const addHp = (state, name) => {
  const player = state.players.find(i => i.name === name)
  player.hp++
}

const changeOrder = (state, order) => {
  state.order = order
}

const removeCurrentPlayer = state => {
  state.current = null
}

const setCurrentPlayer = (state, name) => {
  state.current = state.players.find(i => i.name === name)
}

const createPlayer = (state, name) => {
  state.players.push({
    name,
    score: 0,
    hp: 0,
  })
}

const takeover = (state, name) => {
  state.takeover = state.players.find(i => i.name === name)
}
const removeTakeover = state => {
  state.takeover = null
}

export default {
  takeover,
  removeTakeover,
  removePlayer,
  addPoints,
  removeHp,
  addHp,
  changeOrder,
  createPlayer,
  setCurrentPlayer,
  removeCurrentPlayer,
}