const emailVerify = () => {

    const userText = document.querySelector("input").value;
    const arr = userText.trim().split("@");

    if (arr.length === 2) {

        const userName = arr[0];
        const domainGroupArr = arr[1].split(".");
        const webSiteName = domainGroupArr[0];
        const extention = domainGroupArr[1];

        if (userName === "") {
            alert("This is not a valid address.\nYou must type a valid user name!");
        } else {
            if (domainGroupArr.length === 2) {
                if (webSiteName === "") {
                    alert("This is not a valid address.\nYou must type a Web Site name!");
                } else {
                    if (extention.length == 2 || extention.length == 3) {
                        confirm("Congragulations!!! This is a valid E-Mail Address.")
                    } else {
                        alert("This is not a valid address.\nInappropriate use of extention!");
                    }
                }
            } else {
                alert("This is not a valid address.\nInappropriate use of the '.' sign!");
            }
        }
    } else {
        alert("This is not a valid address.\nInappropriate use of the '@' sign!");
    };
};

document.querySelector("button").addEventListener("click", emailVerify);