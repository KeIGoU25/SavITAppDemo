export function displayUserAccount(firstname, lastname, email, location) {  
    let modal = `
    <div class="userModal">
        <div class="row">
            <div class="col s12 m6">
                <div class="card white">
                    <div class="card-content black-text">
                        <span class="card-title center">User Account Setting</span>
                        <p>Name: ${firstname} ${lastname}</p>
                        <p>Email: ${email}</p>
                        <p>Location: ${location}</p>
                    </div>
                    <div class="card-action blue center">
                        <a href="#" class="white-text" id="userPlan">User Plan</a>
                    </div>
                    <div class="card-action blue center">
                        <a class="white-text" id="logoutBtn">Log Out</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    return modal;
}