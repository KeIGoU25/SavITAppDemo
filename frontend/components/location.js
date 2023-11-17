export function setLocation() {  
    let modal = `
    <div class="userLocation">
        <div class="row">
            <div class="col s12 m6">
                <div class="card white">
                  <form id="locationForm" onsubmit="submitForm()">
                    <div class="card-content black-text">
                        <span class="card-title center"><b>Your Location</b></span>
                        <label for="regionSelect">Select Region:</label>
                        <select id="regionSelect" name="regionSelect" onchange="updateCityDropdown()">
                            <option value="">Select Region</option>
                            <option value="NCR">NCR</option>
                            <option value="IV-A">IV-A</option>
                        </select><br>
                
                        <div id="cityDropdown">
                            <label for="citySelect">Select a city:</label>
                            <select id="citySelect" name="citySelect" onchange="updateMunicipalityDropdown()">
                                <!-- Cities will be dynamically populated based on the selected region -->
                            </select>
                        </div>
                
                        <br>
                
                        <div id="municipalityDropdown">
                            <label for="municipalitySelect">Select a municipality:</label>
                            <select id="municipalitySelect" name="municipalitySelect">
                                <!-- Municipalities will be dynamically populated based on the selected city -->
                            </select>
                        </div>
                
                        <br>
                    </div>
                    <div class="card-action white center">
                        <button class="btn waves-effect waves-light blue" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        
    </script>
    `;

    return modal;
}