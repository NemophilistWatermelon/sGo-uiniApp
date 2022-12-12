import request from '../../config/request.js'


export default {
	getIndexInfo(data) {
		return request({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'get',
			params: data,
		})
	}
}