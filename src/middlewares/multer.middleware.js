// Importing multer module
const multer = require("multer");
// Defining a class called FileUploader
class MulterMiddleware {
  constructor() {
    // Initializing a storage engine for multer
    this.storage = multer.diskStorage({
      // Setting the destination directory for uploaded files
      destination: function (req, file, cb) {
        cb(null, "./uploads"); // Temporary storage for files
      },
      // Setting the filename of the uploaded file
      filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
      },
    });
    // Creating an instance of multer with the defined storage engine
    this.upload = multer({
      storage: this.storage,
      limits: { fileSize: 10 * 1024 * 1024 }, // Set a 10MB file size limit
    }).array("images", 50); // Allow uploading up to 5 files with the name "images"
  }
  // Method to handle uploading of multiple images
  uploadMultipleImages = (req, res) => {
    return req.files; // Return uploaded files
  };
}
// Exporting the MulterMiddleware class to be used in other files
module.exports = MulterMiddleware;
