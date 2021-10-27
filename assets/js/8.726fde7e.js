(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{353:function(e,n,t){e.exports=t.p+"assets/img/axios.21155484.png"},384:function(e,n,t){"use strict";t.r(n);var s=t(42),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#兼容性"}},[e._v("兼容性")])]),s("li",[s("a",{attrs:{href:"#axios-安装"}},[e._v("axios 安装")])]),s("li",[s("a",{attrs:{href:"#axios-常用配置项"}},[e._v("axios 常用配置项")])]),s("li",[s("a",{attrs:{href:"#axios-响应结构"}},[e._v("axios 响应结构")])]),s("li",[s("a",{attrs:{href:"#axios-配置化"}},[e._v("axios 配置化")])]),s("li",[s("a",{attrs:{href:"#全局引入"}},[e._v("全局引入")])])])]),s("p"),e._v(" "),s("h3",{attrs:{id:"兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),s("p",[s("img",{attrs:{src:t(353),alt:"alt text",title:"axios兼容性"}})]),e._v(" "),s("h3",{attrs:{id:"axios-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios-安装"}},[e._v("#")]),e._v(" axios 安装")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install axios -s\n")])])]),s("h3",{attrs:{id:"axios-常用配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios-常用配置项"}},[e._v("#")]),e._v(" axios 常用配置项")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n   // `url` 是用于请求的服务器 URL\n  url: '/user',\n\n  // `method` 是创建请求时使用的方法\n  method: 'get', // default\n\n  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。\n  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL\n  baseURL: 'https://some-domain.com/api/',\n\n  // `headers` 是即将被发送的自定义请求头\n  headers: {'X-Requested-With': 'XMLHttpRequest'},\n\n  // `params` 是即将与请求一起发送的 URL 参数\n  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象\n  params: {\n    ID: 12345\n  },\n\n  // `data` 是作为请求主体被发送的数据\n  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'\n  data: {\n    firstName: 'Fred'\n  },\n\n  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)\n  // 如果请求话费了超过 `timeout` 的时间，请求将被中断\n  timeout: 1000,\n\n   // `withCredentials` 表示跨域请求时是否需要使用凭证\n  withCredentials: false, // default\n\n // `auth` 表示应该使用 HTTP 基础验证，并提供凭据\n  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头\n  auth: {\n    username: 'janedoe',\n    password: 's00pers3cret'\n  },\n\n   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'\n  responseType: 'json', // default\n\n   // `maxContentLength` 定义允许的响应内容的最大尺寸\n  maxContentLength: 2000,\n}\n")])])]),s("h3",{attrs:{id:"axios-响应结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios-响应结构"}},[e._v("#")]),e._v(" axios 响应结构")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n  // `data` 由服务器提供的响应\n  data: {},\n\n  // `status` 来自服务器响应的 HTTP 状态码\n  status: 200,\n\n  // `statusText` 来自服务器响应的 HTTP 状态信息\n  statusText: 'OK',\n\n  // `headers` 服务器响应的头\n  headers: {},\n\n   // `config` 是为请求提供的配置信息\n  config: {},\n // 'request'\n  // `request` is the request that generated this response\n  // It is the last ClientRequest instance in node.js (in redirects)\n  // and an XMLHttpRequest instance the browser\n  request: {}\n}\n")])])]),s("h3",{attrs:{id:"axios-配置化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios-配置化"}},[e._v("#")]),e._v(" axios 配置化")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("import axios from 'axios'\nimport router from './router'\n//  默认请求连接2分钟失效\nconst defaultTimeout = 2\nconst defaultBaseURL = ''\n\n//  根据form提交方式\nconst getHeader = type => {\n  if (type === 1) {\n    return { 'Content-Type': 'application/x-www-form-urlencoded' }\n  } else if (type === 2) {\n    return { 'Content-Type': 'text/plain;charset=UTF-8' }\n  } else {\n    return { 'Content-Type': 'application/json;charset=UTF-8' }\n  }\n}\n\n//  处理errocode\nconst handleErrorCode = (err, reject) => {\n  let code = err.response.status\n  err.code = code\n  err.message = err.response.statusText\n  switch (code) {\n    case 400:\n      err.message = '请求错误'\n      break\n    case 401:\n      err.message = '未授权，请重新登录'\n      break\n    case 403:\n      err.message = '拒绝访问'\n      break\n    case 404:\n      err.message = `请求地址出错: ${err.response.config.url}`\n      break\n    case 408:\n      err.message = '请求超时'\n      break\n    case 500:\n      err.message = '服务器内部错误'\n      break\n    case 501:\n      err.message = '服务未实现'\n      break\n    case 502:\n      err.message = '网关错误'\n      break\n    case 503:\n      err.message = '服务不可用'\n      break\n    case 504:\n      err.message = '网关超时'\n      break\n    case 505:\n      err.message = 'HTTP版本不受支持'\n      break\n    default:\n  }\n  reject(err)\n}\n\n//  获取 axios请求配置\nconst getParamConfig = options => {\n  options.header = getHeader(options.type || 0)\n  options.baseURL = options.baseURL || defaultBaseURL\n  options.timeout = options.timeout || defaultTimeout\n  options.method = options.method ? options.method.toLowerCase() : 'post'\n  options.params = typeof options.params === 'undefined' ? {} : options.params\n  options.data = typeof options.data === 'undefined' ? {} : options.data\n  // 获取上传进度的方法\n  options.onUploadProgress = options.onUploadProgress || null\n  // 获取下载进度的方法\n  options.onDownloadProgress = options.onDownloadProgress || null\n  return {\n    method: options.method,\n    url: options.url,\n    baseURL: options.baseURL,\n    timeout: options.timeout * 60 * 1000,\n    headers: options.header,\n    data: options.data,\n    params: options.params,\n    onUploadProgress: options.onUploadProgress,\n    onDownloadProgress: options.onDownloadProgress,\n  }\n}\n\n// 添加请求拦截器\nconst myRequestInterceptor = axios.interceptors.request.use(config => {\n  // 在发送请求之前做些什么\n  return config;\n}, error => {\n  // 对请求错误做些什么\n  return Promise.reject(error);\n});\n\n// 添加响应拦截器\nconst myResponseInterceptor = axios.interceptors.response.use(response => {\n  // 对响应数据做点什么\n  if (response.data.code === '401') {\n    router.push({\n      path: \"/login\"\n    })\n  }\n  return response;\n}, error => {\n  // 对响应错误做点什么\n  return Promise.reject(error);\n});\n\nconst request = options => {\n  //  创建Promise\n  let promise = (resolve, reject) => {\n    let config = getParamConfig(options)\n    // 是否使用拦截器\n    options.requestInterceptor || axios.interceptors.request.eject(myRequestInterceptor);\n    options.responseInterceptor || axios.interceptors.response.eject(myResponseInterceptor);\n    // axios请求\n    axios(config).then(function (res) {\n      const data = res.data\n      if (data.code) {\n        reject(data || '')\n      } else {\n        resolve(data)\n      }\n    }).catch(function (error) {\n      handleErrorCode(error, reject)\n    })\n\n  }\n  return new Promise(promise)\n}\n\nexport default request\n\n")])])]),s("h3",{attrs:{id:"全局引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局引入"}},[e._v("#")]),e._v(" 全局引入")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 在 main.js文件中引入\nimport request from './request'\nVue.prototype.$api = request;\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);