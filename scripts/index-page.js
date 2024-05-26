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

// async function Delete(id){
//     const res1=await new BandSiteApi(api_key).delete(id);
//     console.log(res1);
// }
// Delete("8f451fbe-b288-4346-8092-e6ca40f334ed")
// 40980fa9-ce84-4c20-aa20-3f207c6ddd9b
// 8f451fbe-b288-4346-8092-e6ca40f334ed
// 434b6795-67ba-4c3b-aa4b-1319202885fd
// 9c715221-686f-4f41-99e8-ca5e256dfd43
// 71c537e7-f306-4776-a620-e9feb2f4b019
// 151bb815-b13b-418c-8370-4ed94136bfeb
// 18429f25-e248-4ef5-9882-2ea649e30727
// d87c876c-8953-4460-bfee-22d56ba5341b
// 68448592-73a1-4739-8183-6cb7a9a58f71
// 549609ca-7d1e-4b48-8be9-99560c603e43
// d88be559-1750-4ec3-b582-62c59d8fc841
// aad46581-7392-48e9-9a27-a825b15d82f0
// d0852980-a0f4-4005-8302-0ad5ee2f82ff
// 8b2fcddd-23b4-4787-bc61-4f1294472cad
// 310d2b75-9e97-428c-9ebe-b8f1dcc3e1e2
// 905c7769-a389-4630-a246-28a9428abe34
// 60d134b4-4b80-412b-a192-e457e4847994
// 60d134b4-4b80-412b-a192-e457e4847994
// 9e9aa506-b396-44e0-add1-5a9ae6a1f28f
// c28307e5-410a-4a07-9dc6-0be6cedda4f1
// 76779413-43f8-47da-a195-b161797b62c1
// f52ebbfe-1662-4a5a-bde1-2fc0195a8d23
// 74d361f4-e470-4d9c-b033-e44da2fa2eaa
// 002aaca1-d756-4ba0-9e74-e34262fb9fce
// 73d906c0-d514-4a62-ab2f-50cefdfa6fed
// 0d22df3f-89a6-40df-8bc8-96ad37061135
// ad7ae18a-e18a-4500-86f3-e81e2b801e7f
// bb56a28b-d516-4334-a75f-612393b1504a
// 2932d349-ff53-4aae-bc5b-edff4b36f8c8
// 42c86ec3-e161-454b-8efa-41507642ce8d
// 26e20f66-c6d9-4b11-8f0e-87d502570491
// 6c2d46fa-5443-47f6-b900-9d44879b4517
// 9415b8e2-153d-4448-a70b-13f222500000
// f0426c4f-cc83-4cb7-bf3d-cff7ae5c64fc
// 48966d48-7625-459e-bd8e-a76e3cb06ee9
// b2731b77-5fd3-4dd6-bf56-9c9e28f43420
// 568ffc87-2c55-4302-934f-ebaa516fc0db
// 23299593-b53c-4a34-b5eb-b4322ffb1113
// 56c41841-ad2c-46e5-89e7-607d1a93db0d
// 7468484c-681a-42d5-a3eb-0cacbfed9cf5
// 20c983a5-d48e-4044-b738-6e6302dd408d
// ecfc600b-01eb-4eff-b0a7-6b190e1daca0
// 1e94d92c-2b56-416d-8f9e-02dcaec1aab0
// 04cb74ab-0e19-4cc3-a891-ff682c0d8dd7
// 10abf589-c4c4-4a98-9254-ac9897ab93b0
// d2c5fb1c-d4f9-4f85-893e-5df49adb81ba
// cf446960-9dcd-4507-ac47-2cc55664d659
// 36a83aea-3b09-41c2-a06c-d8823c9a3b84
