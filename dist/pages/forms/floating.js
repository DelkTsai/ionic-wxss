Page({
	data: {
		form: {
			firstName: '', 
			lastName: '', 
			email: '', 
		}
	},
	bindinput(e) {
		const model = e.currentTarget.dataset.model
		const value = e.detail.value
		this.setData({
			[model]: value, 
		})
	},
})