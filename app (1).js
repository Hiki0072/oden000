function checkFortune() {
    // ユーザーの選択を取得
    var colour = document.getElementById('colour-select').value;
    var number = parseInt(document.getElementById('number-select').value, 10); // selectで選ばれた数字を取得
    var result = "仰向け"; // デフォルトの値

    // 寝相と数字の組み合わせに基づく性格診断結果
    if (colour === "仰向け" && number === 0) {
        result = "真面目";
    } else if (colour === "仰向け" && number === 1) {
        result = "マイペース";
    } else if (colour === "仰向け" && number === 2) {
        result = "おっちょこちょい";
    } else if (colour === "うつ伏せ" && number === 0) {
        result = "おっちょこちょい";
    } else if (colour === "うつ伏せ" && number === 1) {
        result = "マイペース";
    } else if (colour === "うつ伏せ" && number === 2) {
        result = "真面目";
    } else if (colour === "横向き" && number === 0) {
        result = "真面目";
    } else if (colour === "横向き" && number === 1) {
        result = "おっちょこちょい";
    } else if (colour === "横向き" && number === 2) {
        result = "マイペース";
    }

    // 結果を表示
    document.getElementById('result-output').innerText = "あなたの性格は【" + result + "】です";
}
