import Instance from '../index.js'

import IndexApi from '../../api/index/index.js'

export default class IndexService extends Instance {
	
	constructor() {
		super()
	}
	
	async getIndexInfo(props, callback) {
		this.createRequest(IndexApi.getIndexInfo, props, callback, null)
	}
}