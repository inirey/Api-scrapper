const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require("axios")
const qs = require("qs")

function facebook(url) {
    return new Promise(async (resolve, reject) => {
        let host = 'https://aiovideodl.ml/'
        let form = { data: { 'url': url, 'token': (await _token(host)) } }
        axios.post(host + '/system/action.php', qs.stringify(form.data), { headers: is.headers })
            .then(({ data }) => {
                if (data.links.lenght == 0) return resolve({ creator: '@_sekhaa', status: false })
                resolve({ creator: '@_sekhaa', status: true, data: data.links })
            })
    })
}

module.exports = { facebook }
