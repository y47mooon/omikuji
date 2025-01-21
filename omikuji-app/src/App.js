import React, { useState } from 'react';
import './styles.css'; // スタイルをインポート

function App() {
    const [result, setResult] = useState('');
    const [comment, setComment] = useState('');
    const [showResult, setShowResult] = useState(false); // 結果の表示状態を管理
    const [showComment, setShowComment] = useState(false); // コメントの表示状態を管理

    const drawOmikuji = () => {
        const results = [
            { text: '大吉', comment: '今日は素晴らしい日になるでしょう！' },
            { text: '中吉', comment: '良いことがありそうです。期待しましょう！' },
            { text: '小吉', comment: '小さな幸せが訪れるかもしれません。' },
            { text: '凶', comment: '注意が必要です。慎重に行動しましょう。' }
        ];
        const randomIndex = Math.floor(Math.random() * results.length);
        setResult(results[randomIndex].text);
        setComment(results[randomIndex].comment);
        setShowResult(false); // 初期状態に戻す
        setShowComment(false); // 初期状態に戻す

        // アニメーションをトリガーするために少し遅延を入れる
        setTimeout(() => {
            setShowResult(true); // 結果を表示
            setShowComment(true); // コメントを表示
        }, 100); // 100msの遅延
    };

    return (
        <div className="container">
            <h1>おみくじアプリ</h1>
            <button onClick={drawOmikuji}>おみくじを引く</button>
            <div id="result" className={showResult ? 'show' : ''}>{result}</div>
            <div id="comment" className={showComment ? 'show' : ''}>{comment}</div>
        </div>
    );
}

export default App;
