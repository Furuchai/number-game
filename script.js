// 1. ランダムな数字を作る (Pythonの random.randint(1, 100) と同じ)
// Math.random()は0以上1未満の小数なので、100倍して切り捨てて+1します
let randomNumber = Math.floor(Math.random() * 100) + 1;

// 2. HTMLの要素（部品）をJavaScriptで操作できるように取得する
const guessField = document.getElementById('guessField'); // 入力欄
const guessSubmit = document.getElementById('guessSubmit'); // ボタン
const message = document.getElementById('message'); // メッセージ表示場所
const history = document.getElementById('history'); // 履歴表示場所

let guessCount = 1; // 回数のカウント

// 3. 関数（処理のかたまり）を作る
function checkGuess() {
    // 入力された数字を数値として取得 (Pythonの int(input()) に相当)
    let userGuess = Number(guessField.value);

    // 履歴に追記
    history.textContent += userGuess + ' ';

    // 判定ロジック (Pythonの if/elif/else と同じ)
    if (userGuess === randomNumber) {
        message.textContent = '正解！おめでとうございます！';
        message.style.color = 'green';
        setGameOver(); // ゲーム終了処理へ
    } else if (guessCount === 10) {
        message.textContent = 'ゲームオーバー！正解は ' + randomNumber + ' でした。';
        setGameOver();
    } else {
        // 間違いの場合
        if (userGuess < randomNumber) {
            message.textContent = 'もっと大きいです！';
        } else if (userGuess > randomNumber) {
            message.textContent = 'もっと小さいです！';
        }
        message.style.color = 'red';
    }

    guessCount++;
    guessField.value = ''; // 入力欄を空にする
    guessField.focus(); // 入力欄にカーソルを戻す
}

// 4. ゲーム終了時の処理
function setGameOver() {
    guessField.disabled = true; // 入力不可にする
    guessSubmit.disabled = true; // ボタンを押せなくする
}

// 5. 「ボタンがクリックされたら checkGuess を実行する」という設定 (イベントリスナー)
guessSubmit.addEventListener('click', checkGuess);