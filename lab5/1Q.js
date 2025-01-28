function getUser() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "user.json", true);  
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const user = JSON.parse(this.responseText);  
            console.log(user[0]);  
        }
    };
}

getUser();
 