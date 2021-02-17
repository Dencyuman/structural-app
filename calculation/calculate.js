/*ここから
・梁長入力
・各荷重数取得
・各フォーム表示*/

$(function () {
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function () {
        var adjust = -15;
        // スクロールの速度
        var speed = 400; // ミリ秒で記述
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

//送信ボタンを押された時の処理
const FirstSubmit = document.getElementById('FirstSubmit');
FirstSubmit.addEventListener('click', function(){
    //各要素を定数に代入
    const Length = document.getElementById('Length').value;
    const PointNum = document.getElementById('PointNum').value;
    const EqualNum = document.getElementById('EqualNum').value;
    const TriangleNum = document.getElementById('TriangleNum').value;
    const MomentNum = document.getElementById('MomentNum').value;

    function FormLock() {
        let LLength = document.querySelector('input[name="Length"]');
        LLength.disabled = true;
        let LPointNum = document.querySelector('select[name="PointNum"]');
        LPointNum.disabled = true;
        let LEqualNum = document.querySelector('select[name="EqualNum"]');
        LEqualNum.disabled = true;
        let LTriangleNum = document.querySelector('select[name="TriangleNum"]');
        LTriangleNum.disabled = true;
        let LMomentNum = document.querySelector('select[name="MomentNum"]');
        LMomentNum.disabled = true;
    }

    function AppearPointForm(){
        for (let i = 1; i <= PointNum; i++) {
            let PointSet = "Point" + i;
            let PointPrint = document.getElementById(PointSet);
            PointPrint.style.display = 'inline-block';
        };
    }

    function AppearEqualForm(){
        for (let i = 1; i <= EqualNum; i++) {
            let EqualSet = "Equal" + i;
            let EqualPrint = document.getElementById(EqualSet);
            EqualPrint.style.display = 'inline-block';
        };
    }

    function AppearTriangleForm(){
        for (let i = 1; i <= TriangleNum; i++) {
            let TriangleSet = "Triangle" + i;
            let TrianglePrint = document.getElementById(TriangleSet);
            TrianglePrint.style.display = 'inline-block';
        };
    }

    function AppearMomentForm(){
        for (let i = 1; i <= MomentNum; i++) {
            let MomentSet = "Moment" + i;
            let MomentPrint = document.getElementById(MomentSet);
            MomentPrint.style.display = 'inline-block';
        };
    }

    function LengthCheck(Length) {
        if (Length == "") {
            //梁長が空の場合
            alert("梁の長さを入力してください");
            return false; //送信ボタンの動作をキャンセル
        } else {
            //梁長が入力されている場合
            FirstSubmit.style.display = 'none';
            FirstReset.style.display = 'inline-block';
            InputCheck1.style.display = 'inline-block';
            FormLock();
            AppearPointForm();
            AppearEqualForm();
            AppearTriangleForm();
            AppearMomentForm();
            return true;
        }
    }

    LengthCheck(Length);
})


const FirstReset = document.getElementById('FirstReset');
FirstReset.addEventListener('click', function(){
    function Reload(){
        document.location.reload();
    }
    window.setTimeout(Reload, 400);
})

/*ここまで
・梁長入力
・各荷重数取得
・各フォーム表示*/

/*ここから
・各荷重の要素取得
・全荷重の連想配列作成*/


