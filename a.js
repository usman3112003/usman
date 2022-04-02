//JSON => JAVA SCRIPT object notation

var nft = { 
    "title" : "JSON" ,
    "id" : 232 ,
    "users" : ["usman" , "saqib"  , "affan" , "mustafa"] ,

    // another JSON format
    "content" : {
        "name" : "usman" , 
        "status"  : "active" , 

    }
}
 console.log(nft.title)            // to acess into the title value.
 console.log(nft.id)               // to acess into the id value. 
 console.log(nft.users[2])         // to acess into the users array, index 2.
 console.log(nft.content.name)     // to acess into the content name value.


// "JSON" in down fromat should be in capital letter
 nft = JSON.stringify(nft)         // to convert  all json format into string, after this no key and value can be acess
 console.log(nft)

 nft = JSON.parse(nft)             // to convert any string format into JSON format 
 console.log(nft)

 nft.id = 313                     // it will convert id value of nft.
 
 nft.hash = "abcdefgh123456"      // it will make new hash and value in nft
 console.log(nft)

 nft.users[1] = "shahzaib"        // it will change 1 index of nft users array
 console.log(nft)

 nft.users.push("yameen")         // it will push yameen into users array 
 console.log(nft)

 nft.users = []                   // it will empty all array elements
 console.log(nft)

nft.followers = []                // it will make followers array into nft      
nft.followers.push( {             // it will psuh this object into followers of nft
    "key" : "value" ,
    "name" : "usman"
}
)
console.log(nft)

//   ~~~~~~~~~~~~        
//        |
//        |
//        | ASK



