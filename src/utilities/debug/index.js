function off() {
  localStorage.removeItem('debug')
}

function on(namespace = 'RIPETO:*') {
  localStorage.setItem('debug', namespace)
}

export default {
  off,
  on
}
