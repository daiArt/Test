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

    $(".talkHeader").css({
        width: pageWidht,
    })
    

    let topScreanHiehgt = pageWidht / 1.75;
    let downScreanHeight = windowHeight - topScreanHiehgt;
    
    $(".gameUpper").css({
        height: topScreanHiehgt
    })

    $(".announcePlace").css({
        height: topScreanHiehgt,
    })
    
    $(".gameDowner").css({
        height: downScreanHeight
    })

    $(".downerContent").css({
        height: downScreanHeight * 0.8
    })

    let getQuestionTextHeight = $(".questionText").height();
    let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
    $(".questionBox").css({
        height: downContentHeight
    })




    $(window).resize(function() {
        
            // 画面の横幅・縦幅を取得

        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        localStorage.setItem('proNGWindowWidht' , windowWidth)
        localStorage.setItem('proNGWindowHeight' , windowHeight)
        

        let pageWidht = windowHeight * 0.75;

        
        
        $(".main").css({
            width: pageWidht,
            height: windowHeight
        })
        
        $(".background").css({
            width: windowWidth,
            height: windowHeight
        })

        $(".talkHeader").css({
            width: pageWidht
        })
        
        
        
        // 画面の上のサイズを設定
        
        
        let topScreanHiehgt = pageWidht / 1.75;
        let downSvreanHeight = windowHeight - topScreanHiehgt;


        console.log(topScreanHiehgt + '画面の上のところのサイズ')
        
        $(".gameUpper").css({
            height: topScreanHiehgt
        })

        $(".announcePlace").css({
            height: topScreanHiehgt
        })

        $(".gameDowner").css({
            height: downSvreanHeight
        })

        $(".downerContent").css({
            height: downSvreanHeight * 0.8
        })
        
    })




    // 会話の内容を配列に組み込む

    const storyTlaking = [
        '俺たちの街の電力システムがジャックされた！？　デンコウジャー助けて！！',
        '街のいろんなところから電気が使えなくなったとの通報が、、、',
        'これは〇〇の仕業だ！',
        '俺たちデンコウジャーがこの街を救って見せるぞ”！！',
        'どうやら、発電所に異常があるみたいだ、、',
        'とりあえず発電所に行くぞ！',
        'どうやらこの中に発電所があるみたいだ、、',
        'ってあいつは！',
        'よくきたなデンコウジャー。',
        'お前らに30分だけくれてやる！',
        'その間に我々が占領した5つの発電所を開放するんだな',
        'せいぜい手遅れにならないよう足掻くんだな。',
        'まずい、、30分以内に敵を倒しきらなきゃいけないみたいだ、、',
        '最初は火力発電所だ！　いくぞ！',
        'ｷｪｪｪｪｪｪｪｪ (敵が現れた)',
        'あいつがここを襲ったようだな、、',
        'ここは俺の出番だな。　火力発電所、返してもらうぞ！',
        'いけ！　○○○○ ブラスト！',
        'うっ・・・　ﾄﾞｼｬｧ (敵が倒れた)',
        'ふぅ、なんとかなったな。',
        '次は水力エリアだ！',
        'ｸﾞｱｧｧｧｧ',
        '今度の敵はこいつか、、',
        'さぁ　俺の技を受けていただこう！',
        'これが俺の必殺技だ！',
        'いけっ！　〇〇〇〇キャノン！！',
        'ﾊﾞｯｼｬｰﾝ',
        'ｸﾞｪｪｪ..(敵が倒れた)',
        'ﾌｯ... この程度か... 次は風力発電所だ！',
        'つ...次は僕か...',
        '〇〇〇〇〇スラッシュ',
        'ｽﾊﾟｯｯ　(敵が倒れた)',
        'つ..次行こう！',
        'ｸﾞﾜｧｰ',
        'HEY!HEY!HEY!',
        '〇〇〇〇〇！！！　ショット！！！',
        'ピカーッ！！！',
        '買ったぜ！　ウェイ！',
        '次だZE GOGOGO!!!',
        'ｸﾞﾙﾙﾙﾙ',
        '我に宿し封印された力を今この場で開放してやろう！！',
        'いけっ！　〇〇〇〇！　エクスプローション！',
        'ﾄﾞｯｶｰﾝ!!',
        'どうやら我の相手をするには100年早かったようだな！！',
        'きっと次でラストだ！　よし！　ラスボスのところに行くぞ！',
        'よくぞここまできたな。　　褒めてやろうじゃないか',
        '最後は手強いぞ、、　みんなで力を合わせよう！！',
        'おぉ！！',
        '行くぞ！　俺たちの合体技！',
        'パワージェネレーション！！！　〇〇！',
        'お、おのれ、、　覚えていろ！！',
        'こうして全ての発電所が正常に稼働し、街の姿は元に戻った。',

    ]


    const storyTalkerNomber = [
        '12',
        '13',
        '2',
        '1',
        '5',
        '1',
        '2',
        '2',
        '11',
        '11',
        '11',
        '11',
        '1',
        '1',
        '6',
        '2',
        '1',
        '1',
        '6',
        '1',
        '1',
        '7',
        '2',
        '2',
        '2',
        '2',
        '2',
        '7',
        '2',
        '3',
        '3',
        '8',
        '3',
        '9',
        '4',
        '4',
        '4',
        '4',
        '4',
        '10',
        '5',
        '5',
        '',
        '5',
        '1',
        '11',
        '1',
        '0',
        '2',
        '0',
        '11',
        '13'
    ]

    const talkerCharacterName = [
        '全員',
        'レッド',
        'ブルー',
        'グリーン',
        'イエロー',
        'ブラック',
        '敵 A',
        '敵 B',
        '敵 C',
        '敵 D',
        '敵 E',
        'ラスボス',
        '住民',
        'システム'
    ]

    const talkerCharacterLeft = [
        ''
    ]


    let talkCount = 1;


    $(".gameUpper").click(function() {

        console.log(talkCount)

        if (talkCount === 6) {

            // 発電所到着　のやつを作る

            $(".announcePlace").css({
                display: 'flex'
            })



        }



        
        
        
        else if(talkCount === 52) {
        } else {

            let characterSelect = storyTalkerNomber[talkCount];
            characterSelect = Number(characterSelect)

            if (characterSelect >= 1 & characterSelect <= 11) {
                $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
            }


            console.log(characterSelect)

            $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
            $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
            talkCount += 1;
        }
        
        
    })

})