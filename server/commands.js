Meteor.methods({
	getOSInfo() {
		const info = {
			arch: operatingSystem.arch(),
			hostname: operatingSystem.hostname()
		}

		console.log(info)
		return info
	},
	showDialog() {
		this.unblock()
		try {
			return runApplescript(showDialogScript)
		} catch (error) {
			throw new Meteor.Error('AppleScript error', error.message)
		}
	}
})

const showDialogScript = `
tell application "System Events" to set username to the current user's name
display dialog "Hello " & username default answer "Enter some text" with title "Distributed application"
`