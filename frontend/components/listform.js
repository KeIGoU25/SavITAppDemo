export function createList() {  
    let modal = `
    <div class="createList">
        <div class="row">
            <div class="col s12 m6">
                <div class="card white">
                  <form id="listForm" onsubmit="return false;">
                    <div class="card-content black-text">
                        <span class="card-title center"><b>Create List</b></span>
                        <div class="input-field">
                        <label>Category</label><br>
                        <select>
                          <option value="">Choose your option</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select><br>
                        </div>
                        <div class="input-field">
                        <label>Type</label><br>
                        <select>
                          <option value="">Choose your option</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select><br>
                        </div>
                        <div class="input-field">
                        <label>Store</label><br>
                        <select>
                          <option value="">Choose your option</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select><br>
                        </div>
                        <div class="input-field">
                            <label>When</label><br>
                            <input type="date" class="datepicker">
                        </div>
                        <div class="center">
                            <button onclick="createListBtn()" class="btn waves-effect waves-light blue rounded black-text" type="submit" name="action">Create
                                <i class="material-icons right">add</i>
                            </button>
                            <button onclick="deleteListBtn()" class="btn waves-effect waves-light blue rounded black-text" type="submit" name="action">Cancel
                                <i class="material-icons right">cancel</i>
                            </button>
                        </div>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
    `;

    return modal;
}