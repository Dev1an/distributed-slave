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
		runApplescript('display dialog "Hello world"')
	}
})