const worker = new Worker('./dedicatedWorker.js', {name: 'zjl'})
console.log('created worker:', worker)

worker.onmessage = function(data) {
    console.log('收到专用工作者线程消息：', data)
}

worker.postMessage('foo')

for (let i = 0;i < 100;i ++) {
    setTimeout(() => {
        worker.postMessage('bar' + i)
    }, 0)
}