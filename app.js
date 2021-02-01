// async  code example

console.log("Start");

// setTimeout (() =>{
//     console.log("we are the time out")
// }, 6000)

// const items = [1,2,3,4,5]
// items.forEach((item) =>{
//     console.log(item)
// })

function loginUser(email, password, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("ini datanya");
      resolve({ userEmail: email, userPassword: password });
    }, 3000);
  });
}

function getUserVideos(email, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["videos1", "videos2", "videos3"]);
    }, 2000);
  });
}

function videoDetails(video, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

// <-- callback-->
// const user = loginUser("imanardiansyah@gmail.com", 123456, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos,title => {
//       console.log(title)
//     })
//   });
// });

// loginUser('ed','bubmba')
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(detail =>console.log(detail))

async function displayUser() {
  try {
    const loggedUser = await loginUser("ed", 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  }
  catch (error){
    console.log('we could not get the video')
  }
}
displayUser();

console.log("Finish");

// sync
// const yt = new Promise (resolve => {
//   setTimeout (() => {
//     console.log('getting start from yputube')
//     resolve({videos : [1, 2, 3, 4, 5]})
//   },2000)
// })

// const fb = new Promise (resolve => {
//   setTimeout (() => {
//     console.log('stuff from fb')
//     resolve({user : "name"})
//   },2000)
// })

// Promise.all([yt, fb]).then(resulu => console.log(resulu))
