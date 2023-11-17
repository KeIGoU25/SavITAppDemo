export function setPlan() {  
    let modal = `
    <div class="userPlan">
        <div class="card white darken-2 center"><br>
            <div class="row">
                <div class="col s4">
                    <span class="card-title">Free Plan</span>
                    <p>This is a limited version plan for users. Here user can monitor prices and join community.</p>
                    <button class="btn waves-effect waves-light blue" type="submit" name="action" onclick="choosePlan(1)">Choose
                        <i class="material-icons right">send</i>
                    </button>
                </div>
                <div class="col s4">
                    <span class="card-title">Basic Upgrade Plan</span>
                    <p>This is a basic upgrade version plan for users. Here user can monitor prices, list inclusive deals and join community.</p>
                    <button class="btn waves-effect waves-light blue" type="submit" name="action" onclick="choosePlan(2)">Choose
                        <i class="material-icons right">send</i>
                    </button>
                </div>
                <div class="col s4">
                    <span class="card-title">Advance Upgrade Plan</span>
                    <p>This is a advance upgrade version plan for users. Here user can monitor prices, list inclusive deals and join community. 
                    Additionaly, tey will have exclusive deals offers early notifications if store is planning to have a sale and deals.</p>
                    <button class="btn waves-effect waves-light blue" type="submit" name="action" onclick="choosePlan(3)">Choose
                        <i class="material-icons right">send</i>
                    </button>
                    <br><br>
                </div>
            </div>
        </div>
    </div>
    `;

    return modal;
}