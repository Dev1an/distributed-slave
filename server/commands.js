Meteor.methods({
	getOSInfo() {
		return {
			arch: operatingSystem.arch(),
			hostname: operatingSystem.hostname(),
			platform: operatingSystem.platform(),
			cpuCount: operatingSystem.cpus().length,
			drives: getDriveInfo()
		}
	},
	showDialog() {
		this.unblock()
		try {
			return operatingSystem.prompt('Hello', 'Distributed application', 'Enter some text')
		} catch (error) {
			throw new Meteor.Error('AppleScript error', error.message)
		}
	}
})

const showDialogScript = `
tell application "System Events" to set username to the current user's name
display dialog "Hello " & username default answer "Enter some text" with title "Distributed application"
`