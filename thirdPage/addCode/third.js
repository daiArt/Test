$(function() {


    var windowWidth = localStorage.getItem('proNGWindowWidht')
    var windowHeight = localStorage.getItem('proNGWindowHeight')
    

    console.log(windowHeight + 'ウィンドウの高さ')
    console.log(windowWidth + 'ウィンドウの横幅')
    
    let pageWidht = windowHeight * 0.75;
    
    $(".main").css({
        width: pageWidht,
        height: windowHeight
    })

    $(".background").css({
        width: windowWidth,
        height: windowHeight
    })



    // 画面の上のサイズを設定


    let topScreanHiehgt = windowWidth / 2;
    console.log(topScreanHiehgt + '画面の上のところのサイズ')

    $(".gameUpper").css({
        height: topScreanHiehgt
    })

    
})