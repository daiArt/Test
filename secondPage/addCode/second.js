$(function() {


    var windowWeight = localStorage.getItem('proNGWindowWidht')
    var windowHeight = localStorage.getItem('proNGWindowHeight')


    let pageWidht = windowHeight * 0.75;

    $(".main").css({
        width: pageWidht,
        height: windowHeight
    })





    // 会話部分の設定

    // ステージ確認＆設定

    $(".getPlayerSum").css({
        display: 'none'
    })

    $(".getPlayerName").css({
        display: 'none'
    })

    $(".profileCheck").css({
        display: 'none'
    })

    $(".talkSpace").css({
        display: "none"
    })

    let pageStage = 1;

    if (pageStage === 1) {

        // 会話文を配列に追加

        let kaiwa1 = [
            'ようこそ。　ヒーローたちよ',
            'この世界を救いに来てくれた事を感謝する',
            'まずは君たちの名前を教えてくれないか？'
        ]

        // 現在の会話の場所を設定する

        let talkWave = 0;

        $(".talkTarget").html('<h1>' + kaiwa1[talkWave] + '</h1>')

        $(".main").click(function() {
            talkWave += 1;

            if (talkWave === 1) {
                console.log(talkWave)
                $(".talkTarget").html('<h1>' + kaiwa1[talkWave] + '</h1>')
            } else if (talkWave ===2) {
                $(".talkTarget").html('<h1>' + kaiwa1[talkWave] + '</h1>')
                $(".talkBox > p").css({
                    display: 'block'
                })
            } else if (talkWave === 3) {
                pageStage += 1;
                console.log(pageStage)
            }

            if (pageStage === 2) {
                console.log(pageStage)
                $(".talkSpace").css({display: 'none'});
                $(".getPlayerSum").css({display: 'block'})
            }
            

        })

    }






    // プレイヤー数の取得

    $(".inputSumBox > .okBox").click(function() {

        let inputTarget = document.getElementById('getPlayerSum')
        let storage  = inputTarget.value;
        localStorage.setItem('playerSum' , storage)

        // 一時的に2足している。　次の会話ができたら変える

        pageStage += 2;

        if (pageStage === 4) {
            
                    $(".getPlayerSum").css({
                        display: 'none'
                    })
            
                    $(".getPlayerName").css({
                        display: 'block'
                    })

        }

    })





    // 名前の取得

    // 最初の設定

    let playerSum = localStorage.getItem('playerSum')

    console.log('現在の人数は' + playerSum)

    if (playerSum < 5) {
        let storage = 5 - playerSum
        console.log(storage)
        for (i = 5; i > playerSum; i--)  {
            console.log('これから' + i + '個めの入力欄を消去します')

            $("#PN" + i).css({
                display: 'none'
            })

            localStorage.setItem('proNGPlayer' + i, 'none')

        }
    }

    $(".getPlayerName > .okBox").click(function() {

        for (i = 1; i <= playerSum; i ++) {
            let inputTarget = document.getElementById('player' + i)
            let strage = inputTarget.value;
            console.log(i + 'に入力されたのは' + strage)

            localStorage.setItem('player' + i, strage);
            let test = localStorage.getItem('player' + i)
            console.log('プレイヤー' + i + test)
        };

        pageStage += 1;
        console.log(pageStage)

        $(".getPlayerName").css({
            display: 'none'
        })

        $(".profileCheck").css({
            display: 'block'
        })




    })




    // プレイヤー名をチェックするとこ

}) 