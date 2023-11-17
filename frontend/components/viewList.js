export function viewList() {  
    let modal = `
    <div class="createList">
        <div class="row">
            <div class="col s12 m6">
                <div class="card white">
                  <form id="listForm" onsubmit="return false;">
                    <div class="card-content black-text">
                        <div class="dealModal">
                            <span class="card-title"><b>Exclusive Deals</b></span>
                            <button onclick="closeListBtn()" class="right btn waves-effect waves-light blue rounded black-text" name="action">Close
                                <i class="material-icons right">close</i>
                            </button>
                        </div>
                        <div class="row">
                            <div class="col s4">
                                <div class="row">
                                    <div class="col s12 m7">
                                        <div class="card">
                                            <div class="card-image">
                                            <label class="right green lighten-1 white-text">50% OFF</label>
                                            <img src="img/deal1.png">
                                            </div>
                                            <div class="card-content">
                                            <p>Belo Whitening Beauty Deo Roll-on 40ml Buy 1 Take 1</p>
                                            </div>
                                            <div class="card-action">
                                            <a href="#">More Information</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>       
                            </div>
                            <div class="col s4">
                                <div class="row">
                                    <div class="col s12 m7">
                                        <div class="card">
                                            <div class="card-image">
                                            <label class="right green lighten-1 white-text">20% OFF</label>
                                            <img src="img/deal2.png">
                                            </div>
                                            <div class="card-content">
                                            <p>Mighty Clean Detergent Powder Floral Blossom - Powder (Pink) - 1 kilo</p>
                                            </div>
                                            <div class="card-action">
                                            <a href="#">More Information</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>     
                            </div>
                            <div class="col s4">
                                <div class="row">
                                    <div class="col s12 m7">
                                        <div class="card">
                                            <div class="card-image">
                                            <label class="right green lighten-1 white-text">15% OFF</label>
                                            <img src="img/deal3.png">
                                            </div>
                                            <div class="card-content">
                                            <p>Coco Pandan Premium Rice 0.5kg / 1kg</p>
                                            </div>
                                            <div class="card-action">
                                            <a href="#">More Information</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>     
                            </div>
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