operatingSystem = Npm.require('os')

const osascript = Npm.require('node-osascript')
runApplescript = Meteor.wrapAsync(osascript.execute)

const diskspace = Npm.require('diskspace');

getDriveInfo = Meteor.wrapAsync(function(callback) {
	diskspace.check(operatingSystem.platform()=='win32' ? 'C' : '/', function(error, total, free, status) {
		callback(error, {total, free, status})
	})
})