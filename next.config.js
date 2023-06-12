const path = require('path')
 
module.exports = {
  images: {
    path: "@/",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}