let data = ''
onconnect = function (event) {
  const port = event.ports[0]
  port.postMessage('hello')
  port.onmessage = function (e) {
    if (e.data === 'get') {
      port.postMessage(data)
    } else {
      data = e.data
    }
  }
}
