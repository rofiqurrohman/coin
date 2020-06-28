class HomeBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="home">
        <div id="klik" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#klik" data-slide-to="0" class="active"></li>
          <li data-target="#klik" data-slide-to="1"></li>
          <li data-target="#klik" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner jumbotron1">
          <div class="carousel-item active">
            <img src="https://www.unicef.org/sites/default/files/styles/hero_desktop/public/HERO%20IMAGE%20COMIC%20BOOK.jpg" class="d-block w-100" alt="slide1">
          </div>
          <div class="carousel-item">
            <img src="https://comicvine1.cbsistatic.com/uploads/screen_large/0/6063/7067762-dp.jpg" class="d-block w-100" alt="slide2">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.vox-cdn.com/thumbor/jACAsXqQmCaalDEegWMnGqhjcqA=/0x0:600x922/1200x800/filters:focal(265x350:361x446)/cdn.vox-cdn.com/uploads/chorus_image/image/60161179/WALMART_BMMONTHLY_01_COMIC_TRIM_CV_600x922.0.jpg" class="d-block w-100" alt="slide3">
          </div>
        </div>
        </a>
        </div>

        <div class="latest pt-5">
        <h4 class="rounded-pill home">Latest Popular</h4>
        <div id="Controls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner mx-auto" id="popular">
            
            </div>
            <a class="carousel-control-prev" href="#Controls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#Controls" role="button" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
        </div>

        <div class="trending">
          <h4 class="rounded-pill home">Trending Comic</h4>
          <div class="container" id="tren"></div>
        </div>

        <div class="coin">
        <hr>
        <div class="container">
          <h5>COIN Comics - Tempat Baca Komik Online Original Untuk Milenial Indonesia</h5>
          <h7>Kegiatan baca komik online dan webtoon gratis jadi serba mudah di COIN Comics</h7>
          <div class="card mt-4">
            <div class="card-body">
              <p class="card-text">COIN Comics adalah platform baca komik online terlengkap bagi milenial Indonesia. Di sini, kamu bisa baca komik online Indonesia yang beraneka ragam dari author favoritmu. Tersedia komik gaya Jepang, web komik, webtoon gratis, atau komik lokal. Dari segi genre, COIN Comics juga punya komik romance, comedy, horror, slice of life, drama, action, fantasy, dan juga genre special yang pastinya bisa memenuhi seleramu. Segala webtoon karya anak Indonesia di sini dapat kamu baca secara gratis. Ingin membaca belakangan? Kamu juga bisa download komik dan langsung membacanya nanti. Tidak hanya itu, kamu juga mendapatkan update webtoon gratis terbaru langsung dari author kesukaanmu. Dan, kamu bahkan juga bisa meninggalkan komentar dan berinteraksi dengan mereka. Yuk, tunggu apa lagi? Pantengin COIN Comics biar kamu bisa terhubung dengan komunitas komik terbesar untuk milenial Indonesia!</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        `;
    }
 }
  
 customElements.define("home-bar", HomeBar);