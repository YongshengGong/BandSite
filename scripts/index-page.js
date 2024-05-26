import BandSiteApi from "./band-site-api.js";
const api_key = "324d476a-da96-4fa9-a553-491afa44ae75";
const instance = new BandSiteApi(api_key);
const commentDisplay = document.querySelector(".comment__display");

const form = document.querySelector(".comment__input-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    if (e.target.userName.value === "") {
        e.target.userName.style.borderColor = "red";
    }
    else if (e.target.textArea.value === "") {
        e.target.textArea.style.borderColor = "red";
    }
    else {
        const obj = {
            name: e.target.userName.value,
            comment: e.target.textArea.value
        };
        postComment(obj);
        commentDisplay.innerHTML = '';
        e.target.userName.value = "";
        e.target.textArea.value = "";
        e.target.userName.style.borderColor = "#E1E1E1";
        e.target.textArea.style.borderColor = "#E1E1E1";
    }
})
async function postComment(obj) {
    try {
        const res = await instance.postComment(obj);
        console.log(res);
        fetchComment();
    }
    catch (error) {
        console.log(error);
    }
}
async function fetchComment() {
    try {
        const res = await instance.getComment();
        console.log(res);
        let defaultComments = res.splice(0, 3);
        res.reverse();
        let finalRes = [...res, ...defaultComments];
        for (const r of finalRes) {
            addComment(r);
        }
    }
    catch (error) {
        console.log(error);
    }
}

function addComment(r) {
    let userName = document.createElement("h3");
    userName.classList.add("comment__display-post-content-title");
    userName.textContent = r.name;
    let comment = document.createElement("p");
    comment.classList.add("comment__display-post-content-paragraph");
    comment.textContent = r.comment;
    let date = document.createElement("span");
    date.classList.add("comment__display-post-content-date");
    date.textContent = new Date(r.timestamp).toLocaleDateString('en-US');
    let titleDateContainer = document.createElement("section");
    titleDateContainer.classList.add("comment__display-post-content-title-date-container");
    titleDateContainer.appendChild(userName);
    titleDateContainer.appendChild(date);
    let aside = document.createElement("aside");
    aside.classList.add("comment__display-post-content");
    aside.appendChild(titleDateContainer);
    aside.appendChild(comment);

    let image = document.createElement('img');
    image.classList.add("comment__display-post-profile");
    image.src = "";
    image.alt = "user-profile-picture-alt";

    let article = document.createElement("article");
    article.classList.add("comment__display-post");
    article.appendChild(image);
    article.appendChild(aside);

    commentDisplay.appendChild(article);
}

fetchComment();

async function Delete(id) {
    const res1 = await new BandSiteApi(api_key).delete(id);
    console.log(res1);
}









