
function logger(request, response, next) {
	next();
	const now = new Date();
	const currentTime = `${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

	console.log(`${request.hostname} -- [${currentTime}] "${request.method} ${request.originalUrl} ${response.statusCode}"`);
}

export { logger };