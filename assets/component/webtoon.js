class WebtoonBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="webtoon">
        <div class="container">
        <div class="wbaru mt-4">
            <h4 class="rounded-pill">Webtoon Baru</h4>
            
        </div>
        <div class="row mt-5">
            <div class="col-md-9">
            <h4 class="rounded-pill mb-3">Webtoon Update</h4>
            <div class="wupdate"></div>
            </div>
            <div class="col-md-3" id="twebtoon">
            <h3>Top Webtoon</h3>
            </div>
        </div>
        </div>
        </div>
        `;
    }
 }
  
 customElements.define("webtoon-bar", WebtoonBar);