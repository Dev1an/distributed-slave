operatingSystem = Npm.require('os')

const osascript = Npm.require('node-osascript')
runApplescript = Meteor.wrapAsync(osascript.execute)

const diskspace = Npm.require('diskspace');

getDriveInfo = Meteor.wrapAsync(function(callback) {
	const drive = operatingSystem.platform()=='win32' ? 'C' : '/';
	diskspace.check(drive, function(error, total, free, status) {
		callback(error, [{total, available: free, used: total-free, status, drive}])
	})
})