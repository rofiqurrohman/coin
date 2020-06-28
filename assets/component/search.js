class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="search container">
            <div class="row csearch">

            </div>
        </div>
        `;
    }
 }
  
 customElements.define("search-bar", SearchBar);