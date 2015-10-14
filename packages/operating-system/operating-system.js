operatingSystem = Npm.require('os')

const osascript = Npm.require('node-osascript')
runApplescript = Meteor.wrapAsync(osascript.execute)