let userComment = [
    {
        name: "Victor Pinto",
        timeStamp: "11/02/2023",
        commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Christina Cabrera",
        timeStamp: "10/28/2023",
        commentText:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Isaac Tadesse",
        timeStamp: "10/20/2023",
        commentText:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

// const userName=document.querySelector(".comment__display-post-content-title");
// const timeStamp=document.querySelector(".comment__display-post-content-date");
// const commentText=document.querySelector(".comment__display-post-content-paragraph");
// const titleDateContainer=document.querySelector(".comment__display-post-content-title-date-container");
// const aside=document.querySelector(".comment__display-post-content");
// const image=document.querySelector(".comment__display-post-profile");
// const article=document.querySelector(".comment__display-post");
const commentDisplay=document.querySelector(".comment__display");

const form=document.querySelector(".comment__input-form");
form.addEventListener("submit",e=>{
    e.preventDefault();
    if(e.target.userName.value===""){
      e.target.userName.style.borderColor="red";
    }
    else if(e.target.textArea.value===""){
        e.target.textArea.style.borderColor="red";
      }
    else{
    const obj={
        name:e.target.userName.value,
        timeStamp:new Date().toLocaleDateString('en-US'),
        commentText:e.target.textArea.value
    };
    userComment.unshift(obj);
    addComment(userComment);
    e.target.userName.value="";
    e.target.textArea.value="";
    e.target.userName.style.borderColor="#E1E1E1";
    e.target.textArea.style.borderColor="#E1E1E1";
}
})

function addComment(arr) {
commentDisplay.innerHTML = '';
for(let i=0;i<arr.length;i++){
 let userName=document.createElement("h3");
 userName.classList.add("comment__display-post-content-title");
 userName.textContent=arr[i].name;
 let commentText=document.createElement("p");
 commentText.classList.add("comment__display-post-content-paragraph");
 commentText.textContent=arr[i].commentText;
let date=document.createElement("span");
date.classList.add("comment__display-post-content-date");
date.textContent=arr[i].timeStamp;
let titleDateContainer=document.createElement("section");
titleDateContainer.classList.add("comment__display-post-content-title-date-container");
titleDateContainer.appendChild(userName);
titleDateContainer.appendChild(date);
let aside=document.createElement("aside");
aside.classList.add("comment__display-post-content");
aside.appendChild(titleDateContainer);
aside.appendChild(commentText);

let image=document.createElement('img');
image.classList.add("comment__display-post-profile");
image.src="";
image.alt="user-profile-picture-alt";

let article=document.createElement("article");
article.classList.add("comment__display-post");
article.appendChild(image);
article.appendChild(aside);

commentDisplay.appendChild(article);
}
}
addComment(userComment);
