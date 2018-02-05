export class Notification {
  message: String;
  phoneNumber: Long;
  accessKey:String;
  secretKey:String;
  
  
  constructor (message: String, phoneNumber: Long,accessKey: String,secretKey: String){
   this.message = message
   this.phoneNumber = phoneNumber
   this.accessKey = accessKey
   this.secretKey = secretKey
}}
}