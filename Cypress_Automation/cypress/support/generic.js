
export default class Generic{
    emaildomain(mail){
        var ind = mail.indexOf('@')
        var my_slice = mail.slice(ind,mail.length)
        return my_slice
       
    }

    emaildomainname(mail){
        var ind = mail.indexOf('@')
        var my_slice = mail.slice(ind,mail.length-3)
        return my_slice
       
    }


}