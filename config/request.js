import axios from 'axios'
axios.defaults.adapter = function(config) {
	return new Promise((resolve, reject) => {
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response) {
				// console.log("执行完成：", response)
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};
				settle(resolve, reject, response);
			}
		})
	})
}

const service = axios.create({
	timeout: 5000,
	baseURL: '',
})


service.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     // 给请求头添加user-token
        //     config.headers["user-token"] = store.state.token;
        // }
        console.log('请求拦截成功')
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

//配置成功后的拦截器
service.interceptors.response.use(res => {
    if (res.status== 200) {
        return res.data
    } else {
        return Promise.reject(res.msg);
    }
}, error => {
    return Promise.reject(error)
})

export default service
