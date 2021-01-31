// async  code example


console.log("Start")

// setTimeout (() =>{
//     console.log("we are the time out")
// }, 6000)

// const items = [1,2,3,4,5]
// items.forEach((item) =>{
//     console.log(item)
// })

function loginUser(email, password, callback) {
    setTimeout(()=> {
        console.log("ini datanya")
        callback({userEmail : email, userPassword : password})
    }, 4000)
}

// <-- callback-->
 const user = loginUser("imanardiansyah@gmail.com", 123456, user => {
     console.log(user)
 })


console.log("Finish")