const masterAddress = Meteor.settings.masterAddress || 'http://Damiaan.local:3000/'

const initConnection = DDP.connect(masterAddress)

initConnection.call('register', {
	address: process.env.ROOT_URL.replace('localhost', operatingSystem.hostname())	
}, (err, res) => {
	if (err) {
		throw err
	} else {
		initConnection.disconnect()
	}
})