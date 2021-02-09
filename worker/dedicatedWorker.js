console.log('insider worker', self)
self.postMessage({from: '专用工作者'})

self.setTimeout(() => {
    self.close()
},30000)


self.addEventListener('message', (event) => {
    console.log('接收到父上下文的消息', event.data)
})