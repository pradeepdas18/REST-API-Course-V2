/**
 * Setup the Database URL
 */


const DB_USER = "admin"
const DB_PASSWORD = "admin123"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "PASTE CLUSTER ADDRESS HERE"

// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"