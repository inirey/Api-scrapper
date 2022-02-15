/*
  © Made with By 
  https://github.com/MRHRTZ
  https://github.com/inirey

*/
  

const baseUrl = 'https://photooxy.com'
const path = [
     '/other-design/create-an-easy-smoke-type-effect-390.html',
     '/other-design/cross-gun-like-a-fps-player-130.html',
     '/game-effects/make-grand-theft-auto-v-official-cover-132.html',
     '/dota/make-avatar-dota-2-online-139.html',
     '/game-effects/cool-circle-guns-wallpapers-141.html',
     '/other-design/make-google-suggestion-photos-238.html',
     '/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html',
     '/fps-game-effect/create-battlefield-4-rising-effect-152.html',
     '/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html',
     '/logo-and-text-effects/text-on-scary-cemetery-gate-172.html',
     '/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html',
     '/burning-effect/holding-fire-animation-304.html',
     '/other-design/photo-of-lead-art-337.html',
     '/art-effects/half-underwater-photo-effect-163.html',
     '/art-effects/iphone-x-mockup-online-204.html',
     '/art-effects/broke-a-card-298.html',
     '/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html',
     '/photo-frames/photo-of-summer-beach-383.html',
     '/photo-frames/summer-photo-frame-2018-381.html',
     '/photo-frames/photo-frame-in-nature-379.html',
     '/logo-and-text-effects/make-tik-tok-text-effect-375.html',
     '/art-effects/gif-animated-rain-online-361.html',
     '/logo-and-text-effects/creating-an-underwater-ocean-363.html',
     '/logo-and-text-effects/make-smoky-neon-glow-effect-343.html',
     '/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html',
     '/logo-and-text-effects/carved-wood-effect-online-171.html',
     '/other-design/create-dark-metal-text-with-special-logo-160.html',
     '/art-effects/night-beach-photo-effect-353.html',
     '/art-effects/glitch-red-cyan-photo-effect-202.html',
     '/art-effects/create-3d-anaglyph-photo-effect-203.html',
     '/art-effects/print-photo-on-balloon-300.html',
     '/art-effects/typographic-portrait-online-346.html',
     '/art-effects/great-night-sky-effect-292.html',
     '/manga-and-anime/make-one-piece-wanted-poster-online-129.html',
     '/other-design/firework-video-effect-online-396.html',
     '/other-design/make-a-video-that-spells-your-name-237.html'
]



function gtaV(path_file) {
     return new Promise((resolve, reject) => {
          try {
               const img = fs.readFileSync(path_file)
               const buff = Buffer.from(img).toString('base64')
               const opt = {
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    jar: true,
                    method: 'POST',
                    url: baseUrl + path[2],
                    form: {
                         'image_1': buff,
                         'login': 'OK'
                    }
               }
               request.post(opt, (err, response, body) => {
                    const $ = cheerio.load(body)
                    const result = {
                         result: $('div.btn-group > a').attr('href')
                    }
                    resolve(result)
               })
          } catch (error) {
               reject(error)
          }
     })
}
