
function formatDate(date) {
	const day = String(date.getDate()).padStart(2, '0');
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
						"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const month = monthNames[date.getMonth()];
	const year = date.getFullYear();

	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
	}

function logger(request, response, next) {
	next();
	const now = new Date();

	console.log(`${request.hostname} -- [${formatDate(now)}] "${request.method} ${request.originalUrl} ${response.statusCode}"`);
}

export { logger };