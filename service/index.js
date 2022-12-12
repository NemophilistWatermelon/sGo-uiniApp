export default class Instance {
	constructor() {}
	
	static new() {
		return new this()
	}
	
	
	async createRequest(actionFunName, props, catchFunc, endActionFunc) {
		try {
			const res = await actionFunName(props)			
			catchFunc(res, null)
		} catch (error) {
			catchFunc(error)
		} finally {
			endActionFunc && endActionFunc()
		}
	}
}