class GenreBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="genres">
        <nav class="navbar navbar-expand justify-content-center bg-light navbar-light">
            <div class="navbar-nav">
            <a class="nav-item nav-link genre active mr-3" id="28">Action</a>
            <a class="nav-item nav-link genre mr-3" id="12">Adventure</a>
            <a class="nav-item nav-link genre mr-3" id="35">Comedy</a>
            <a class="nav-item nav-link genre mr-3" id="14">Fantasy</a>
            <a class="nav-item nav-link genre mr-3" id="14">Horror</a>
            <a class="nav-item nav-link genre mr-3" id="10749">Romance</a>
            </div>
        </nav>
        <div class="container">
        <h2></h2>
        <div class="row" id="genreid"></div>
        </div>
        </div>
        `;
    }
 }
  
 customElements.define("genre-bar", GenreBar);