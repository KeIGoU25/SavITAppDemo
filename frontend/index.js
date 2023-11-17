import { displayUserAccount } from "./components/user_account.js";
import { displaySettings } from "./components/settings.js";
import { setLocation } from "./components/location.js";
import { setPlan } from "./components/subscription.js";
import { createList } from "./components/listform.js";
import { viewList } from "./components/viewList.js";


document.addEventListener("DOMContentLoaded", async function () {

   async function updateInfo() {
    let user_account = document.getElementById("user-account");
    let settings = document.getElementById("settings");
    let userModal = document.getElementById("user_account_modal");
    let settingsModal = document.getElementById("settings_modal");
    let userInfoElement = document.getElementById("userInfo");
    let userLocation = document.getElementById("userLocation");
    let userPlanModal = document.getElementById("userPlanModal");
    let listFormModal = document.getElementById("listFormModal");
    let createYourList = document.getElementById("createYourList");
    let viewListModal = document.getElementById("viewListModal");
    let viewListBtn = document.getElementById("viewList");

    createYourList.onclick = () => {
        listFormModal.innerHTML = createList();
    }

    viewListBtn.onclick = () => {
        viewListModal.innerHTML = viewList();
    }

    try {
        
        // Make a request to the server to get the user information
        const response = await fetch("/get-user-info");
        console.log(response);
        const result = await response.json();

        if (response.ok) {
            if (result && result.firstname) {
                // Update the HTML content with the relevant user information
                userInfoElement.innerText = "Hi! " + result.firstname;
                let logoutBtn = "";
                let userPlan = "";

                function clickUserAccount(event) {
                    userModal.innerHTML = displayUserAccount(result.firstname, result.lastname, result.email, result.location);
                    logoutBtn = document.getElementById("logoutBtn");
                    userPlan = document.getElementById("userPlan");
                    console.log(logoutBtn);

                    async function logoutUser() {
                        // Make a request to the server to get the user information
                        const response = await fetch("/logout-user");
                        console.log(response);
                        alert("Logout Succesfully...");
                        window.location.href = "./";
                    }
                    
                    if (logoutBtn !== "") {
                        logoutBtn.onclick = logoutUser;
                    }


                    async function userPlanF()  {
                        userPlanModal.innerHTML = setPlan;
                    }

                    if (userPlan !== "") {
                        userPlan.onclick = userPlanF;
                    }

                    event.stopPropagation(); // Prevent the click event from propagating to the document click handler
                }
                
                localStorage.setItem("email", `${result.email}`);
                user_account.onclick = clickUserAccount;
                
                document.addEventListener("click", function(event) {
                    // Check if the click occurred outside the user_account element and userModal is not empty
                    if (!user_account.contains(event.target) && !userModal.contains(event.target) && userModal.innerHTML !== "") {
                        userModal.innerHTML = "";
                        logoutBtn = "";   
                    }
                });

                if (result.location === undefined) {
                    userLocation.innerHTML = setLocation;
                }
            } else {
                console.log("User information not available");
                function signInPage() {
                    window.location.href = "/signin/";
                }

                user_account.onclick = signInPage;
            }
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            // Handle other error scenarios as needed
        }
    } catch (error) {
        console.error("An error occurred:", error);
        // Handle unexpected errors
    }

    function clickUserSettings(event) {
        settingsModal.innerHTML = displaySettings();
        event.stopPropagation(); // Prevent the click event from propagating to the document click handler
    }

    settings.onclick = clickUserSettings;

    document.addEventListener("click", function(event) {
        // Check if the click occurred outside the user_account element and userModal is not empty
        if (!settings.contains(event.target) && !settingsModal.contains(event.target) && settingsModal.innerHTML !== "") {
            settingsModal.innerHTML = "";
        }
    });
  } 
  await updateInfo();
});

