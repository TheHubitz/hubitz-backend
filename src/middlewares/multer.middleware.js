import multer from "multer";

const storage = multer.diskStorage({
	destination: function(request, file, callback) {
		callback(null, ".public/temp")
	},
	filename: function(request, file, callback) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
		callback(null, file.fieldname + "-" + uniqueSuffix);
	}
});

const upload = multer({
	storage: storage,
});

export { upload };