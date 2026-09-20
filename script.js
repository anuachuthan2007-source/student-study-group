const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const message =
            document.getElementById("message");

        if (email === "" || password === "") {

            message.textContent =
                "Please enter email and password.";

            return;
        }

        window.location.href = "dashboard.html";

    });

}
// ===============================
// DASHBOARD BUTTONS
// ===============================

function logout() {
    window.location.href = "index.html";
}


function browseGroups() {
    window.location.href = "groups.html";
}


function createGroup() {
    window.location.href = "creategroup.html";
}


function myGroups() {
    window.location.href = "mygroups.html";
}


function studyMaterials() {
    window.location.href = "materials.html";
}