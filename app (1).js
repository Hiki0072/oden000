        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "うつ伏せ"; // デフォルトの値

            if (colour === "仰向け" && number === 0) {
                result = "真面目";
            } else if (colour === "仰向け" && number === 1) {
                result = "マイペース";
            } else if (colour === "仰向け" && number === 2) {
                result = "おっちょこちょい";
            } else if (colour === "うつ伏せ" && number === 0) {
                result = "飽き性";
            } else if (colour === "うつ伏せ" && number === 1) {
                result = "目立ちたがり屋";
            } else if (colour === "うつ伏せ" && number === 2) {
                result = "ナルシスト";
            } else if (colour === "横向き" && number === 0) {
                result = "努力家";
            } else if (colour === "横向き" && number === 1) {
                result = "サイコパス";
            } else if (colour === "横向き" && number === 2) {
                result = "ひねくれもの";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
