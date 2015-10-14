const initConnection = DDP.connect(Meteor.settings.masterAddress)

initConnection.call('register', {
	address: process.env.ROOT_URL	
}, (err, res) => {
	if (err) {
		throw new Error('unable to register')
	} else {
		initConnection.disconnect()
	}
})