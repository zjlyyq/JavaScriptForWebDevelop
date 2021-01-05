let iDbRequests = indexedDB.open('user')
let user = {
    userName: '001',
    firstName: 'Zhang',
    lastName: 'San',
    age: 24
}
iDbRequests.onupgradeneeded = event  => {
    const db = event.target.result
    console.log(db === iDbRequests)
    
    if (db.object)
}