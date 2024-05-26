import BandSiteApi from "./band-site-api.js";
const api_key="324d476a-da96-4fa9-a553-491afa44ae75";
const instance=new BandSiteApi(api_key);
// let userComment = [
//     {
//         name: "Victor Pinto",
//         // timeStamp: "11/02/2023",
//         comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
//     },
//     {
//         name: "Christina Cabrera",
//         // timeStamp: "10/28/2023",
//         comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {
//         name: "Isaac Tadesse",
//         // timeStamp: "10/20/2023",
//         comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     }
// ];
// let userComment=[];

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
        // timeStamp:new Date().toLocaleDateString('en-US'),
        comment:e.target.textArea.value
    };
    // userComment.unshift(obj);
    postComment(obj);
    commentDisplay.innerHTML = '';
    fetchComment();
    e.target.userName.value="";
    e.target.textArea.value="";
    e.target.userName.style.borderColor="#E1E1E1";
    e.target.textArea.style.borderColor="#E1E1E1";
}
})
async function postComment(obj){
    try{
      const res=await instance.postComment(obj);
      console.log(res);
    }
    catch(error){
        console.log(error);
    }
}
async function fetchComment(){
    try{
        const res=await instance.getComment();
        console.log(res);
        for(const r of res){
         addComment(r);
        }
    }
    catch(error){
    console.log(error);
    }
}

function addComment(r) {
// commentDisplay.innerHTML = '';
 let userName=document.createElement("h3");
 userName.classList.add("comment__display-post-content-title");
 userName.textContent=r.name;
 let comment=document.createElement("p");
 comment.classList.add("comment__display-post-content-paragraph");
 comment.textContent=r.comment;
let date=document.createElement("span");
date.classList.add("comment__display-post-content-date");
date.textContent=r.timestamp;
let titleDateContainer=document.createElement("section");
titleDateContainer.classList.add("comment__display-post-content-title-date-container");
titleDateContainer.appendChild(userName);
titleDateContainer.appendChild(date);
let aside=document.createElement("aside");
aside.classList.add("comment__display-post-content");
aside.appendChild(titleDateContainer);
aside.appendChild(comment);

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

fetchComment();
// addComment(userComment);

async function Delete(id){
    const res1=await new BandSiteApi(api_key).delete(id);
    console.log(res1);
}
// Delete("07c72e33-9927-4288-9e3e-0e3577a4f626")








