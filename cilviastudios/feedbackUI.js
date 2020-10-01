const feedbackUI = Object.create(null);

feedbackUI.init = async function (serverid) {
    console.log("feedbackUI running");
    const el = (id) => document.getElementById(id);
    // write to templates for comments
    const cloneTemplate = (id) => document.importNode(el(id).content, true);

    const commenthistory = [];
    const name = el("name");
    const feedback = el("feedback");
    const usercomments = el("usercomments");
    // async function used to fetch arrays of names and comments.
    const getData = async function() {
        const response = await fetch(serverid);
        let json = await response.json();
        return json;
    }
    // async funciton awaits input from getData() function.
    const theComments = async function() {
        let CommentList = await getData();
        return CommentList;
    };

    let testObj = await theComments();
    // now here we mainpulate the data from the server to give
    // us an array of names and an array of comments.
    let names = await Object.values(testObj)[0][0];
    let comments = await Object.values(testObj)[0][1];
    el("nocomments").textContent = `${comments.length} comments `;
    var commentCounter = 0
    // to prevent lag when rendering and iterating through comments
    // setTimeout was used to push the funciton to the bottom of the stack.
    // the function generates the comments by manipulating the set template
    setTimeout(names.forEach(name => {
        const commentTemplate = cloneTemplate("user-comment");
        commentTemplate.querySelector("[name = username]").textContent = name;
        commentTemplate.querySelector("[name = comment]")
        .textContent = comments[commentCounter];
        commentTemplate.querySelector("[name = seperator]").textContent = "";
        usercomments.append(commentTemplate);
        commentCounter += 1;
    }), 0);
    // this async function operates on the click of the comment
    // button, posting the name and commment to the servee to be stored
    // in the database.
    var counterCommentNumber = 0;
    el("commentbutton").onclick = async function () {
        const userName = name.value.trim();
        const userFeedback = feedback.value.trim();
        if (name.value !== "") {
            if(userFeedback !== "") {
                console.log("clicked");
                const data = {userName, userFeedback};
                const options = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                };

                const response = await fetch(serverid, options);
                const json = await response.json();
                console.log(json);

                const commentTemplate = cloneTemplate("user-comment");
                commenthistory.push(userFeedback);
                commentTemplate.querySelector("[name = username]")
                .textContent = userName;
                commentTemplate.querySelector("[name = comment]")
                .textContent = userFeedback;
                commentTemplate.querySelector("[name = seperator]")
                .textContent = "";
                usercomments.appendChild(commentTemplate);

                name.value = "";
                feedback.value = "";
                counterCommentNumber += 1;
                el("nocomments").textContent =
                `${comments.length + counterCommentNumber} comments `;
                theComments();
            } else {
                console.log("empty comment");
            }
        } else {
            console.log("empty name");
        }
    };
};
export default Object.freeze(feedbackUI);