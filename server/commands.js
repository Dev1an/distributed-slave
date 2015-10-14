Meteor.methods({
	getOSInfo() {
		return {
			arch: operatingSystem.arch(),
			hostname: operatingSystem.hostname()
		}
	}
})