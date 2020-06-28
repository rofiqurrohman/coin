// trending
    $.ajax({
        url: `https://api.themoviedb.org/3/trending/movie/day`,
        type: 'get',
        dataType: 'json',
        data: {
            'api_key': '5ea6b6f159101019e79062f3ad0defde'
        },
        success: function (result) {
            let tren = result.results;
            $.each(tren, function (i, data) {
                if(i >= 10){
                $('#tren').append(`
                    <div class="card" style="max-width: 340px;">
                    <div class="row">
                    <!--div class="col-1"><h5>${i}</h5></div-->
                    <div class="col-2">
                        <img src="https://image.tmdb.org/t/p/w200/${data.poster_path}" class="card-img" alt="${data.title}">
                    </div>
                    <div class="col-9">
                        <small class="text-muted">Ratings ${data.vote_average}</small>
                        <h6 class="card-title">${data.title}</h6>
                    </div>
                    </div>
                    </div>
                `);
                }
            });
        },
    })
//--------
// Latest
$.ajax({
    url: `https://api.themoviedb.org/3/movie/popular`,
    type: 'get',
    dataType: 'json',
    data: {
        'api_key': '5ea6b6f159101019e79062f3ad0defde'
    },

    success: function (result) {
        let popular=result.results;
        $('#popular').append(`
        <div class="carousel-item active">
            <img src="https://image.tmdb.org/t/p/w200${popular[0].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[1].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[2].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[3].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[4].poster_path}">
        </div>
        <div class="carousel-item">
            <img src="https://image.tmdb.org/t/p/w200${popular[5].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[6].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[7].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[8].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[9].poster_path}">
        </div>
        <div class="carousel-item">
            <img src="https://image.tmdb.org/t/p/w200${popular[10].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[11].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[12].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[13].poster_path}">
            <img src="https://image.tmdb.org/t/p/w200${popular[14].poster_path}">
        </div>
        `)
    }
})
// --------
// Schedule
$.ajax({
    url: `https://api.themoviedb.org/3/movie/now_playing`,
    type: 'get',
    dataType: 'json',
    data: {
        'api_key': '5ea6b6f159101019e79062f3ad0defde'
    },

    success: function (result) {
        let jadwal=result.results;
        $.each(jadwal, function (i, data) {
        if (i <= 4){
            $('#senin').append(`
            <img src="https://image.tmdb.org/t/p/w200${data.poster_path}">
            `)
        }
        if (i >= 5 && i <= 9){
            $('#selasa').append(`
            <img src="https://image.tmdb.org/t/p/w200${data.poster_path}">
            `)
        }
        if (i >= 10 && i <= 14 ){
            $('#rabu').append(`
            <img src="https://image.tmdb.org/t/p/w200${data.poster_path}">
            `)
        }
        if (i >= 15 && i <= 19 ){
            $('#kamis').append(`
            <img src="https://image.tmdb.org/t/p/w200${data.poster_path}">
            `)
        }
     });
    }
})

//Manhwa

$.ajax({
    url: `https://api.themoviedb.org/3/search/movie`,
    type: 'get',
    dataType: 'json',
    data: {
        'api_key': '5ea6b6f159101019e79062f3ad0defde',
        'query' : 'ninja'
    },
    success: function (result) {
        let tren = result.results;
        $.each(tren, function (i, data) {
            if(i >= 1 && i <= 6){
                $('#tmanhwa').append(`
                    <div class="card mb-4 topm" style="max-width: 340px;">
                    <div class="row">
                    <div class="col-md-3">
                        <img src="https://image.tmdb.org/t/p/w200${data.poster_path}" class="card-img" alt="${data.title}">
                    </div>
                    <div class="col-md-9">
                        <h5 class="card-title">${i}</h5>
                        <span class="card-text">${data.title}</span>
                    </div>
                    </div>
                    </div>
                `);
            }

            if(i >= 7 && i <= 9){
                $('#p4').append(`
                    <div class="card mb-3" style="max-width: 840px;">
                    <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" class="card-img" alt="${data.title}">
                        <div class="card-img-overlay">
                        <p class="rounded-pill">News Manhwa</p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body overflow-hidden">
                        <h5 class="card-title">${data.title}</h5>
                        <span class="card-text">${data.overview}</span>
                        </div>
                    </div>
                    </div>
                    </div>
                `);
                }
                if(i >= 16 && i <= 20){
                    $('.mtoday').append(`
                    <img src="https://image.tmdb.org/t/p/w200${data.poster_path}" class="card-img" alt="${data.title}">
                    `);
                }
        });
    },
});

// Webtoon

$.ajax({
    url: `https://api.themoviedb.org/3/search/movie`,
    type: 'get',
    dataType: 'json',
    data: {
        'api_key': '5ea6b6f159101019e79062f3ad0defde',
        'query' : 'marvel'
    },
    success: function (result) {
        let tren = result.results;
        $.each(tren, function (i, data) {
            if(i >= 1 && i <= 5){
                $('#twebtoon').append(`
                    <div class="card mb-4 topw" style="max-width: 300px;">
                    <div class="row">
                    <div class="col-md-4">
                        <img src="https://image.tmdb.org/t/p/w200${data.poster_path}" class="card-img" alt="${data.title}">
                    </div>
                    <div class="col-md-8">
                        <h5 class="card-title">${i}</h5>
                        <span class="card-text">${data.title}</span>
                    </div>
                    </div>
                    </div>
                `);
                }
                if(i >= 6 && i <= 15){
                    $('.wupdate').append(`
                        <div class="card mb-4 webup border-0" style="max-width: 300px;">
                        <div class="row">
                        <div class="col-md-4">
                            <img src="https://image.tmdb.org/t/p/w200${data.poster_path}" class="card-img" alt="${data.title}">
                        </div>
                        <div class="col-md-8">
                            
                            <span class="card-text">${data.title}</span>
                        </div>
                        </div>
                        </div>
                    `);
                }
                if(i >= 15 && i <= 19){
                    $('.wbaru').append(`
                    <img src="https://image.tmdb.org/t/p/w200${data.poster_path}" class="card-img" alt="${data.title}">
                    `);
                }
        });
    },
})