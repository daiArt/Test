$(function() {

    // $(".getPlayerSum").css({
    //     display: 'none'
    // })

    // $(".getPlayerName").css({
    //     display: 'none'
    // })


    var windowWeight = localStorage.getItem('proNGWindowWidht')
    var windowHeight = localStorage.getItem('proNGWindowHeight')


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



    $(".okBox").click(function() {

        const testTarget = document.getElementById('getPlayerSum')
        let playerSum = testTarget.value;
        localStorage.setItem('playerSum' , playerSum)


        let test = localStorage.getItem('playerSum')
        console.log('playerSumは' + test)

    })

}) 