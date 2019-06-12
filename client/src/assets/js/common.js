function formatTime(ts) {

    const time = new Date(parseInt(ts))
    const date = time.toLocaleDateString().replace(/\//g, '-') + ' ' + time.toLocaleTimeString()
    return date
}

module.exports = formatTime