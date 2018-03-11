const RainbowSixApi = require("rainbowsix-api-node")
const R6 = new RainbowSixApi()

let userName = "viral chaos"
let platform = "xone"

R6.stats(userName, platform, false).then(response => {
  console.log(response)
}).catch(error => {
  console.error(error)
})

/*R6.profile(userName, platform).then(response => {
  console.log(response)
}).catch(error => {
  console.error(error)
})
*/
