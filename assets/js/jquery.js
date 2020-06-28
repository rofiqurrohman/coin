
//Menu
$(document).ready(function(){
    $('genre-bar').hide()
    $('schedule-bar').hide();
    $('manhwa-bar').hide();
    $('webtoon-bar').hide();
    $('profil-bar').hide();
    $('search-bar').hide();
})
$('#home').on('click', function () {
    $('home-bar').show();
    $('schedule-bar').hide();
    $('genre-bar').hide();
    $('manhwa-bar').hide();  
    $('webtoon-bar').hide();
    $('profil-bar').hide();
    $('search-bar').hide();
});

$('#genre').on('click', function () {
    $('home-bar').hide();
    $('schedule-bar').hide(); 
    $('genre-bar').show();
    $('manhwa-bar').hide();
    $('webtoon-bar').hide();
    $('profil-bar').hide();
    $('search-bar').hide();
    $('h2').html('Action');
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie`,
        type: 'get',
        dataType: 'json',
        data: {
            'api_key': '5ea6b6f159101019e79062f3ad0defde',
            'query' : 'action'
        },
        success: function (result) {
            let gen = result.results
            let content = '';
            console.log(gen)
            $.each(gen, function (i, data) {
                if(i < 20){
                content += `<div class="col-sm-2"><div class="card mb-3" style="width: 10rem;"><img src="https://image.tmdb.org/t/p/w200${data.poster_path}" class="card-img-top" alt="${data.title}"><p class="pl-2">${data.title}</p></div></div>`
                }
            });
            $('#genreid').html(content);
        }
    })
});

$('#schedule').on('click', function () {
    $('home-bar').hide();
    $('schedule-bar').show();  
    $('genre-bar').hide();
    $('manhwa-bar').hide();
    $('webtoon-bar').hide();
    $('profil-bar').hide();
    $('search-bar').hide();
});

$('#manhwa').on('click', function () {
    $('home-bar').hide();
    $('schedule-bar').hide();  
    $('genre-bar').hide();
    $('manhwa-bar').show();
    $('webtoon-bar').hide();
    $('profil-bar').hide();
    $('search-bar').hide();
});

$('#webtoon').on('click', function () {
    $('home-bar').hide();
    $('schedule-bar').hide();  
    $('genre-bar').hide();
    $('manhwa-bar').hide();
    $('webtoon-bar').show();
    $('profil-bar').hide();
    $('search-bar').hide();
});

$('#profil').on('click', function () {
    $('home-bar').hide();
    $('schedule-bar').hide();  
    $('genre-bar').hide();
    $('manhwa-bar').hide();
    $('webtoon-bar').hide();
    $('profil-bar').show();
    $('search-bar').hide();
});

$('.btncari').on('click', function () {
    $('search-bar').show();
    $('home-bar').hide();
    $('schedule-bar').hide();  
    $('genre-bar').hide();
    $('manhwa-bar').hide();
    $('webtoon-bar').hide();
    $('profil-bar').hide();
    $('.pencarian').remove();
    $('.csearch').html('');
    
    var nilai = $('#vsearch').val();
    $('.csearch').before(`<h3 class="pencarian">Search result : ${nilai}</h3>`)
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie`,
        type: 'get',
        dataType: 'json',
        data: {
            'api_key': '5ea6b6f159101019e79062f3ad0defde',
            'query' : $('#vsearch').val()
        },
        success: function (result) {
            let search = result.results
            // console.log(search)
            $.each(search, function (i, data) {
                $('.csearch').append(`
                <div class="col-sm-2">
                <div class="card mb-3" style="width: 10rem;">
                <img src="https://image.tmdb.org/t/p/w200${data.poster_path}" class="card-img-top" alt="${data.title}">
                <p class="pl-2">${data.title}</p>
                </div>
                </div>`)
            });
            $('#vsearch').val('');
        }
    })
});

//---------

$('.nav1').on('click', function () {
    $('.nav1').removeClass('active');
    $(this).addClass('active');
});

$('.genre').on('click', function () {
    $('.genre').removeClass('active');
    $(this).addClass('active');

    // let genreid = $(this).attr('id');
    // console.log(genreid)

    let kategori = $(this).html();
    $('h2').html(kategori);

    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie`,
        type: 'get',
        dataType: 'json',
        data: {
            'api_key': '5ea6b6f159101019e79062f3ad0defde',
            'query' : $(this).html()
        },
        success: function (result) {
            let gen = result.results
            let content = '';
            console.log(gen)
            $.each(gen, function (i, data) {
                if(i < 20){
                content += `<div class="col-sm-2"><div class="card mb-3" style="width: 10rem;"><img src="https://image.tmdb.org/t/p/w200${data.poster_path}" class="card-img-top" alt="${data.title}"><p class="pl-2">${data.title}</p></div></div>`
                }
            });
            $('#genreid').html(content);
        }
    })
});
