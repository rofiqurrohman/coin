class FootBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="footer bg-light mt-4">
        <div class="row border-top mx-auto pt-3">
          <div class="col-md-2 text-center">
            <a href="#"><img src="https://rofiqurrohman.github.io/img/fb.png" alt="fb"></a>
            <a href="#"><img src="https://rofiqurrohman.github.io/img/ig.png" alt="ig"></a>
            <p>Copyright ©2020 COIN</p>
          </div>
          <div class="col-md-6 mx-auto">
           <nav class="navbar navbar-expand justify-content-center">
            <div class="navbar-nav">
              <a class="nav-item nav-link active mr-3" href="#">About US</a>
              <a class="nav-item nav-link active mr-3" href="#">Privacy & Policy</a>
              <a class="nav-item nav-link active mr-3" href="#">Terms & Conditions</a>
              <a class="nav-item nav-link active mr-3" href="#">F.A.Q</a>
              <a class="nav-item nav-link active mr-3" href="#">Contact Us</a>
            </div>
           </nav>
          </div>
          <div class="col-md-2"></div>
        </div>
        </div>
        `;
    }
 }
  
 customElements.define("foot-bar", FootBar);