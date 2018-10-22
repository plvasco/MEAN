import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let CMDB = new Schema({
    Hostname: {
        type: String
    },
    Responsible: {
        type: String
    },
    Function: {
        type: String
    },
    IPAddress: {
        type: String
    },
    Environment: {
        type: String,
        default: 'PROD'
    },
	  EmailAddress: {
	    type: String
	},
	  ServerType: {
	    type: String
		default: 'VM'
	},


});
export default mongoose.model('CMDB', CMDB);
