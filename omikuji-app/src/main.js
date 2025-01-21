document.getElementById('draw-button').addEventListener('click', function() {
    const results = ['大吉', '中吉', '小吉', '凶'];
    const randomIndex = Math.floor(Math.random() * results.length);
    const result = results[randomIndex];
    document.getElementById('result').innerText = `あなたの結果は: ${result}`;
});
