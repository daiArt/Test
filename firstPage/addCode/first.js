$(function() {

    // 画面の横幅・縦幅を取得

    let windowWidth = $(window).width();
    let windowHeight = $(window).height();

    localStorage.setItem('proNGWindowWidht' , windowWidth)
    localStorage.setItem('proNGWindowHeight' , windowHeight)
    
    var testW = localStorage.getItem('proNGWindowWidht')
    var testH = localStorage.getItem('proNGWindowHeight')

    console.log(testW)
    console.log(testH)


    if (windowHeight < 1024) {

        let pageWidht = windowHeight * 0.75;

        $(".main").css({
            width: pageWidht,
            height: windowHeight
        })

    } else {
        $(".main").css({
            width: '768px',
            height: '1024px'
        })
    }

})