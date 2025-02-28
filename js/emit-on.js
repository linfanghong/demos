class Observer {
  caches = {}
  emit = ({ eventName, params }) => {
    const fns = this.caches[eventName]
    if (Array.isArray(fns)) {
      fns.forEach((fn) => fn(params))
    }
  }
  on = ({ eventName, fn }) => {
    this.caches = {
      ...this.caches,
      [eventName]: [...(this.caches[eventName] || []), fn],
    }
  }
  off = ({ eventName, fn }) => {
    if (fn) {
      const fns = this.caches[eventName]
      if (Array.isArray(fns)) {
        this.caches[eventName] = fns.filter((f) => f !== fn)
      }
    } else {
      delete this.caches[eventName]
    }
  }
}

const observer = new Observer()

observer.on({
  eventName: 'test',
  fn: (log) => {
    console.log(log)
  },
})

observer.on({
  eventName: 'test',
  fn: (log) => {
    console.log('111', log)
  },
})

observer.emit({ eventName: 'test', params: 'test' })

observer.off({ eventName: 'test' })

observer.emit({ eventName: 'test2' })
