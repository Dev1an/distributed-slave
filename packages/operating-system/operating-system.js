operatingSystem = Npm.require('os')

const osascript = Npm.require('node-osascript')
runApplescript = Meteor.wrapAsync(osascript.execute)

const diskfree = Npm.require('node-diskfree')

getDriveInfo = Meteor.wrapAsync(function(callback) {
	diskfree.drives((error, drives) => {
		if (error) {
			callback(error)
			return
		}
		diskfree.drivesDetail(drives, (error, info) => {
			callback(error, info)
		})
	})
})