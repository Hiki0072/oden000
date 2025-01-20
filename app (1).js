function checkFortune() {
    var colour = document.getElementById('colour-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "仰向け"; // デフォルトの値

    if (colour === "仰向け" && number === 0) {
        result = "真面目";
    } else if (colour === "仰向け" && number === 1) {
        result = "マイペース";
    } else if (colour === "仰向け" && number === 2) {
        result = "天然";
    } else if (colour === "うつ伏せ" && number === 0) {
        result = "おっちょこちょい";
    } else if (colour === "うつ伏せ" && number === 1) {
        result = "人見知り";
    } else if (colour === "うつ伏せ" && number === 2) {
        result = "短期";
    } else if (colour === "横向き" && number === 0) {
        result = "頑固";
    } else if (colour === "横向き" && number === 1) {
        result = "明るい";
    } else if (colour === "横向き" && number === 2) {
        result = "自我強い";
    }
    
    document.getElementById('result-output').innerText = "あなたの性格は【" + result + "】です";
}
