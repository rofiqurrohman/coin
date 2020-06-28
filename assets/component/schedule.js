class ScheduleBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="jadwal">
        <div class="container" id="schedule">
            <div class="senin mb-5 mt-5">
            <h4 class="rounded-pill">Senin</h4>
            <div class="schimg text-center mt-4" id="senin"></div>
            </div>
            <div class="selasa mb-5">
            <h4 class="rounded-pill">Selasa</h4>
            <div class="schimg text-center mt-4" id="selasa"></div>
            </div>
            <div class="rabu mb-5">
            <h4 class="rounded-pill">Rabu</h4>
            <div class="schimg text-center mt-4" id="rabu"></div>
            </div>
            <div class="kamis mb-5">
            <h4 class="rounded-pill">Kamis</h4>
            <div class="schimg text-center mt-4" id="kamis"></div>
            </div>
        </div>
        </div>
        `;
    }
 }
  
 customElements.define("schedule-bar", ScheduleBar);