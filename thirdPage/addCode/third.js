$(function() {


    var windowWidth = localStorage.getItem('proNGWindowWidht')
    var windowHeight = localStorage.getItem('proNGWindowHeight')
    

    console.log(windowHeight + 'ウィンドウの高さ')
    console.log(windowWidth + 'ウィンドウの横幅')
    
    let pageWidht = windowHeight * 0.75;




    $(window).resize(function() {
        
            // 画面の横幅・縦幅を取得

        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        localStorage.setItem('proNGWindowWidht' , windowWidth)
        localStorage.setItem('proNGWindowHeight' , windowHeight)
        
        var testW = localStorage.getItem('proNGWindowWidht')
        var testH = localStorage.getItem('proNGWindowHeight')

        console.log(testW)
        console.log(testH)

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
        
        
        let topScreanHiehgt = pageWidht / 1.9;
        console.log(topScreanHiehgt + '画面の上のところのサイズ')
        
        $(".gameUpper").css({
            height: topScreanHiehgt
        })
        
    })
        
})