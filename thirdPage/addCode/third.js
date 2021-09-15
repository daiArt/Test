$(function() {


    var windowWidth = localStorage.getItem('proNGWindowWidht')
    var windowHeight = localStorage.getItem('proNGWindowHeight')
    
    
    let pageWidht = windowHeight * 0.75;
    
    $(".main").css({
        width: pageWidht,
        height: windowHeight
    })

    
})