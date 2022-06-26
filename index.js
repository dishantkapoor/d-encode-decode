
let salted_key="ksdflskklsdfj";

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}
    
const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}

const random_number=(min, max)=> {
    return Math.floor(min + Math.random()*(max - min + 1))
  }

const keys_set1=[
    'ICSIGkmFD2','VQkD4tz3pL','qV7rHm5xco','UIox9vb8Io','5HTtK4clSj','y9OEAqbjxu','5yseuhlj7p','CEavNqyCFg','o7cah7Gep2','j5496XDF2Q','VSp8MztiJs','ArzMyK6eIS','dkGgTW2krt','muMjL4kGOm','o4go6OTLK8','WuiMKupL1o','Z7lrqQw1pP','wERtCBebqu','I14ftBdMbL','THIdicb1Ts','2SyJbq3Qom','jtJvrb6MxW','w3QFqtIBsS','TVcz0gSzzt','nTywSO9ap1','yukvMhd9jq','XdIwqUWe2f','kN6eo3nmzc','93SgzdpyMX','kLmyLAySWZ','S0WvEqQqXX','WnyKvxj22q','u2ys5N5Mbo','vqhqYn56Ge','JKwttnsWCi','1DNw3jfrWC','acgf9H66O0','pEAlImfcao','t3ovPXsDpY','orx9lNQvqP','Zk7GhzHva6','95WIJQ9Hvg','KZJcQYo1hY','b3PVDVkmKr','jqzi7jVD1P','1ZbmX4QGtH','zlkyjSBusE','fzTAMVZofC','RdbaAViMYt','iksoIShem5'
]
const keys_set2=[
    '9mHNm0eFCo','tbVfE8qVKL','9g6wbQLEiM','p0xLd4nXZ2','gHyBCc6Mdu','vzmq8akanX','L3DaOsQB7a','TYb0e4ywEq','EnYaANMuA9','uq660u6OmM','CwmBU57VCa','X3gjD2x73w','Rv9VnyToD9','vk9nRzgAOi','KPYM4l7vQD','Yv4bCntV5e','3IKuavvNFG','3Njif00f8P','XBBIciwh6g','viw6CJkZNc','FX5wQ3ZFl5','5NrqmJaddd','RUKPn3nQ8m','UMV7aLaOOI','wWJgZ3wk9l','NaYuQ6jQ89','f39jxqBbLI','JLCEBYWhAW','ixQc4MZxY4','uECZoAohI3','hUCZz030ze','UfEG0KuzzP','ujPfu5qD6s','IOHrBFCWNS','s9yI17bknC','NXK5b5ZYwY','dgqJv2KMCZ','r6hJm9pxeM','rI9HM283n4','muvUrVQB3d','p9Y43z4Ckn','N8PUvtJYpB','XbRFnBbAf6','ZqoRBjNE2N','dAjd3Iapa1','aSaJeYpx3d','d9P248l5dU','rRPNOLXMfQ','sgw2U7trXA','8H9furGs4W'
]

const key =(keys)=>{
    salted_key=keys;
    return 
}

const ts = () => Math.floor(new Date().getTime() / 1000);



function encode(string,time=0){
    const start = Date.now();
    var num1=random_number(0,49);
    var num2=random_number(0,49);
    if(time<1){
        const myCipher = cipher(salted_key)
        var enc_key=myCipher(num1+"$"+num2);
        var rand_str=keys_set1[num1]+keys_set2[num2]
        //Then cipher any text:
         const newCipher=cipher(rand_str);
         var secure_encoded_string=newCipher(string)
         var temp_enc=secure_encoded_string+"$$##$$"+enc_key;
          var final_encoded_string=myCipher(temp_enc);
    }else{
        const myCipher = cipher(salted_key)
        var current_time=ts();
        var enc_key=myCipher(num1+"$"+num2+"$"+current_time+"$"+time);
        var rand_str=keys_set1[num1]+keys_set2[num2]
        //Then cipher any text:
         const newCipher=cipher(rand_str);
         var secure_encoded_string=newCipher(string)
         var temp_enc=secure_encoded_string+"$$##$$"+enc_key;
          var final_encoded_string=myCipher(temp_enc);    
    }
  
    // To create a cipher

   
    return final_encoded_string;
}

function decode(string,time=0){
    const start = Date.now();
    const myDecipher = decipher(salted_key)
    var decoded_string1=myDecipher(string)
    var data_array = decoded_string1.split("$$##$$");
    var enc_string_data=data_array[0];
    var enc_key_salt=data_array[1];
    var decoded_keys=myDecipher(enc_key_salt);
    var key_indexes=decoded_keys.split("$");
    if(key_indexes.length>2){
    var current_time=ts();
 
    if(((current_time-key_indexes[2]))<((key_indexes[3]+1)/10)){
       //Process of decoding
      
       var key_for_decode=keys_set1[key_indexes[0]]+keys_set2[key_indexes[1]];
       const newDecipher = decipher(key_for_decode)
       var decoded_string=newDecipher(enc_string_data)
    }else{
        var decoded_string="String Expired!";
    }
    }else{
        var key_for_decode=keys_set1[key_indexes[0]]+keys_set2[key_indexes[1]];
        //Process of decoding
        const newDecipher = decipher(key_for_decode)
        var decoded_string=newDecipher(enc_string_data)
    }
    


   return decoded_string;
}


module.exports = {encode,decode,key}