class ProfilBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="profil">
        <div class="container">
        <div class="row mt-5">
            <div class="col-2">
            <div class="nav flex-column nav-pills" >
                <a class="nav-link active" data-toggle="pill" href="#profile" >My Account</a>
                <a class="nav-link" data-toggle="pill" href="#password" >Change Password</a>
            </div>
            </div>
            <div class="col-9">
            <div class="tab-content">
                <div class="tab-pane card fade show active" id="profile">
                <h3 class="text-center">My Account</h3>
                <div class="media mt-4">
                    <img src="https://rofiqurrohman.github.io/img/rofiq.jpg" class="mr-3 rounded-circle" alt="profil">
                    <div class="media-body">
                    <h3 class="mt-4">Rofiqur Rohman</h3>
                    </div>
                </div>
                <form class="mt-5">
                    <div class="form-group">
                    <label for="name">Display Name</label>
                    <input type="text" class="form-control" placeholder="rofiqurrohman">
                    </div>
                    <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" placeholder="rofiqurrohman@gmail.com">
                    </div>
                    <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="number" class="form-control" placeholder="+62 85335630785">
                    </div>
                    <p>Gender</p>
                    <div class="form-check ml-3">
                    <input type="radio" class="form-check-input" name="Radios" checked>
                    <label for="gender">Male</label>
                    </div>
                    <div class="form-check ml-3">
                    <input type="radio" class="form-check-input" name="Radios">
                    <label for="gender">Female</label>
                    </div>
                    <div class="form-group">
                    <label for="email">Date Of Birth</label>
                    <input type="date" class="form-control">
                    </div>
                    <button type="button" class="btn btn-primary">Save</button>
                </form>
                </div>
                <div class="tab-pane card fade" id="password">
                <h3 class="text-center">Change Password</h3>
                <form class="mt-5">
                    <div class="form-group">
                    <label for="old">Current Password</label>
                    <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                    <label for="old">New Password</label>
                    <input type="password" class="form-control">
                    </div>
                    <div class="form-group">
                    <label for="old">Confirm New Password</label>
                    <input type="password" class="form-control">
                    </div>
                    <button type="button" class="btn btn-primary">Save</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        `;
    }
 }
  
 customElements.define("profil-bar", ProfilBar);