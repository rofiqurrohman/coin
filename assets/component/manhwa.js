class ManhwaBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="manhwa">
        <div class="row">
            <div class="col-md-9">
            <div id="klik" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#klik" data-slide-to="0" class="active"></li>
                <li data-target="#klik" data-slide-to="1"></li>
                <li data-target="#klik" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://image.tmdb.org/t/p/original/qiFse005acXSGGTZcETuVemJiSg.jpg" class="d-block w-100" alt="slide1">
                </div>
                <div class="carousel-item">
                    <img src="https://image.tmdb.org/t/p/original/635qI5pWhQSUaTnOkMo4GLCe8sV.jpg" class="d-block w-100" alt="slide2">
                </div>
                <div class="carousel-item">
                    <img src="https://image.tmdb.org/t/p/original/8xFchdONiwU5Ey9hfDO4yhtcoas.jpg" class="d-block w-100" alt="slide3">
                </div>
                </div>
            </div>
            <div class="p2 mt-5">
                <div class="row">
                <div class="col">
                <div class="card bg-dark text-white" id="card2">
                <img src="https://image.tmdb.org/t/p/w500/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg" class="card-img" alt="">
                <div class="card-img-overlay">
                    <p class="rounded-pill">Finish Manhwa</p>
                </div>
                </div>
                </div>
                <div class="col">
                <div class="card bg-dark text-white" id="card2">
                <img src="https://image.tmdb.org/t/p/w500/sL92Cyf8oeIGm76FEsRZMj7FtzT.jpg" class="card-img" alt="">
                <div class="card-img-overlay">
                    <p class="rounded-pill">New Manhwa</p>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div class="p3 mt-5">
                <div class="container mtoday">
                <h4 class="rounded-pill">Manhwa Today</h4>
                
                </div>
            </div>
            <div class="p4 mt-5">
                <div class="container" id="p4">
                
                </div>
            </div>
            </div>
            <div class="col-md-3 tm" id="tmanhwa">
            <h3>Top Manhwa</h3>
            </div>
        </div>
        </div>
        `;
    }
 }
  
 customElements.define("manhwa-bar", ManhwaBar);