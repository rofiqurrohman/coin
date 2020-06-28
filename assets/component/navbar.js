class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container navbar1">    
            <a class="navbar-brand" href="">
                <img src="./assets/img/icon.png" alt="icon" width="40" height="40" class="d-inline-block">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link nav1 active mr-3" id="home">Home</a>
                <a class="nav-item nav-link nav1 mr-3" id="schedule">Schedule</a>
                <a class="nav-item nav-link nav1 mr-3" id="genre">Genre</a>
                <a class="nav-item nav-link nav1 mr-3" id="manhwa">Manhwa</a>
                <a class="nav-item nav-link nav1" id="webtoon">Webtoon</a>
                </div>
            </div>
            <form class="form-inline cari mr-3">
                <input class="form-control rounded-pill" type="search" placeholder="Search" id="vsearch">
                <button type="button" class="btn rounded-circle btncari"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
            <div class="dropdown mr-4">
                <button class="btn btn-light rounded-pill" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" id="profil" type="button">
                        <p class="font-weight-bold">Rofiqurrohman</p>
                        <small class="text-muted">Lihat Profil</small>
                    </button>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="login.html">Sign In</a>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" type="button">Keluar</button>
                </div>
            </div>
        </div>
        </nav>
        `;
    }
 }
  
 customElements.define("nav-bar", NavBar);