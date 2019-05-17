const playersSorted = (state) => {
  const clone = state.players.slice(0)

  if (state.order === 'takeover') {
    clone.sort((a, b) => {
      if (a.score < b.score) return -1
      if (a.score > b.score) return 1
      if (a.hp < b.hp) return 1
      if (a.hp > b.hp) return -1
    })
  } else if (state.order === 'places') {
    clone.sort((a, b) => {
      if (a.score < b.score) return 1
      if (a.score > b.score) return -1
      if (a.hp < b.hp) return 1
      if (a.hp > b.hp) return -1
    })
  }

  return clone
}

const TOP_COUNT = 3

const top = (state) => {
  const clone = state.players.slice(0)
  clone.sort((a, b) => {
    if (a.score < b.score) return 1
    if (a.score > b.score) return -1
    if (a.hp < b.hp) return 1
    if (a.hp > b.hp) return -1
  })

  const top = []
  let place = 1
  const isEqualLast = item => {
    const last = top[top.length - 1]
    if (!item || !last) {
      return false
    }

    return last.score === item.score && last.hp === item.hp
  }

  for (const item of clone) {
    if (top.length > 0 && !isEqualLast(item)) {
      if (top.length >= TOP_COUNT) {
        break
      }
      place++
    }
    item.place = place
    top.push(item)
  }

  return top
}

const answering = state => {
  return state.takeover || state.current || null
}

const isGameOrder = state => {
  return state.order === 'game'
}

export default {
  isGameOrder,
  top,
  playersSorted,
  answering,
}
