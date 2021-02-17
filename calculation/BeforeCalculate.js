var add_point_num = document.getElementById('add_point_num')
add_point_num.addEventListener('click', function () {
    var length_sentence = document.getElementById('length_sentence');
    var length = document.getElementById('length').value;
    var alert_length = document.getElementById('alert_length');
    try {
        if (length == "") {
            alert_length.style.display = 'inline';
            length_sentence.style.display = 'inline';
            throw new Error('終了します');
        } else {
            alert_length.style.display = 'none';
            length_sentence.style.display = 'block';
        }
    } catch (e) {
        alert(wahaha);
    }
    var point_num = document.getElementById('point_num').value;

    for (i = 1; i <= point_num; i++) {
        var point_set = "point" + i + "set";
        var print = document.getElementById(point_set);
        print.style.display = 'block';
    };
    add_point_num.style.display = 'none';

    var restart = document.getElementById('restart');
    restart.style.display = 'inline';

    var submit = document.getElementById('submit');
    submit.style.display = 'block';

    restart.addEventListener('click', function () {
        location.reload();
    })
    var length = document.querySelector('input[name="length"]');
    length.disabled = true;
    var point_num = document.querySelector('select[name="point_num"]');
    point_num.disabled = true;

    var element = document.getElementById('target2');
    var rect = element.getBoundingClientRect();
    var position = rect.top;
    scrollTo(0, position);

})

var submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    submit.style.display = 'none';
})


var point_list = [];
var moment_list = [];

var submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    var point_num = document.getElementById('point_num').value;

    for (i = 1; i <= point_num; i++) {
        var point_power = "point" + i + "_power";
        var point = document.getElementById(point_power).value;

        var point_p = "point" + i;
        var direction = document.getElementById(point_p).value;

        if (direction == 0) {
            point_list.push(point);
        } else {
            point *= (-1);
            point_list.push(point);
        }

        var point_position = "point" + i + "_position";
        var position = document.getElementById(point_position).value;
        var moment = point * position;
        moment_list.push(moment);
    }

    var point_l = point_list.length;

    total_point = 0;
    total_moment = 0;

    var length = document.getElementById('length').value;

    for (j = 0; j < point_l; j++) {
        var now_point = Number(point_list[j]);
        total_point += now_point;

        var now_moment = Number(moment_list[j]);
        total_moment += now_moment;
    }

    var rb = Math.round((total_moment / length) * 100) / 100;
    var ra = Math.round((total_point - rb) * 100) / 100;


    document.getElementById('ra').innerHTML = ra;
    document.getElementById('rb').innerHTML = rb;
})

// 計算は上、右、右回りが正と定義。モーメント基準点は左端。

//読み込み時に実行する
onload = function () {
    /* 線を引く */
    var line_canvas = document.getElementById("line");
    var line_ctx = line_canvas.getContext("2d");
    line_ctx.beginPath();

    //基本形(梁)を作る
    //開始位置に移動する
    line_ctx.moveTo(50, 100);
    //線を引く
    line_ctx.lineTo(40, 120);
    line_ctx.lineTo(60, 120);
    line_ctx.lineTo(50, 100);
    line_ctx.lineTo(300, 100);
    line_ctx.lineTo(290, 120);
    line_ctx.lineTo(310, 120);
    line_ctx.lineTo(300, 100);
    line_ctx.closePath();
    line_ctx.stroke();
    //開始位置に移動する
    line_ctx.moveTo(290, 125);
    // 線を引く
    line_ctx.lineTo(310, 125);
    line_ctx.closePath();
    line_ctx.stroke();

    //基本形(縦)を作る
    // 開始位置に移動する
    line_ctx.moveTo(50, 150);
    // 線を引く
    line_ctx.lineTo(50, 600);
    line_ctx.closePath();
    line_ctx.stroke();
    // 開始位置に移動する
    line_ctx.moveTo(300, 150);
    // 線を引く
    line_ctx.lineTo(300, 600);
    line_ctx.closePath();
    line_ctx.stroke();

    //基本形(横)を作る
    // 開始位置に移動する
    line_ctx.moveTo(50, 300);
    // 線を引く
    line_ctx.lineTo(300, 300);
    line_ctx.closePath();
    line_ctx.stroke();
    // 開始位置に移動する
    line_ctx.moveTo(50, 500);
    // 線を引く
    line_ctx.lineTo(300, 500);
    line_ctx.closePath();
    line_ctx.stroke();

    //基本形(文字)を作る
    var txtQ = "Q図";
    var txtM = "M図";
    //文字のプロパティ設定
    line_ctx.font = "italic 20px Arial";
    line_ctx.fillStyle = "black";
    //文字書き込み
    line_ctx.fillText(txtQ, 5, 308);
    line_ctx.fillText(txtM, 5, 508);

    var length = 10;
    var point_locate = 3;
    var arrow_locate = point_locate / length;
    var arrow_position = arrow_locate * 250 + 50;

    //矢印作成
    line_ctx.moveTo(arrow_position, 100);
    line_ctx.lineTo(arrow_position, 30);
    line_ctx.closePath();
    line_ctx.stroke();

    line_ctx.moveTo(arrow_position - 5, 85);
    line_ctx.lineTo(arrow_position, 100);
    line_ctx.lineTo(arrow_position + 5, 85);
    line_ctx.stroke();

    //Q図作成
    line_ctx.moveTo(50, 350);
    line_ctx.lineTo(arrow_position, 350);
    line_ctx.lineTo(arrow_position, 280);
    line_ctx.lineTo(300, 280);
    line_ctx.stroke();

    //M図作成
    line_ctx.moveTo(50, 500);
    line_ctx.lineTo(arrow_position, 580);
    line_ctx.lineTo(300, 500);
    line_ctx.stroke();

    line_ctx.moveTo(arrow_position, 580);
    line_ctx.lineTo(arrow_position, 500);
    line_ctx.stroke();
}