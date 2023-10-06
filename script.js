'use strict'
// 1行目に記載している 'use strict' は削除しないでくださ
//---------------------------------------------------
/**
 * @param {Function} cityQuiz ランダムに発生させた目的地を当てるゲーム
 * @param {string} inputAnswer - 入力した答え
 * @param {string} candidate - プロンプト内選択候補地(表示用)
 * @param {string} tempCandidate - プロンプト内選択候補地(計算用)
 * @param {number} money - 賞金(100万円から不正解するたびに-10万円)
 * @param {number} moneyDisplay - 最終賞金をindex.htmlに渡す
 * @param {number} correctAnswer - 正解都市番号
 * @param {string} inputCheck - 不正解時に表示するメッセージ
 * @param {string} inputAnswer - コンソールに入力した都市名
 * @param {string} northSouth - 正解都市までの緯度の距離感メッセージ
 * @param {string} eastWest - 正解都市までの経度の距離感メッセージ
 * @param {string} areaCheck - 正解都市と地域の同異メッセージ
 * @param {string} prefCheck - 正解都市と県の同異メッセージ
 * @param {objet} cityInfo - 各都市の情報(オブジェクト)が入った配列
 * @param {objet} cityObject - 正解都市の情報(オブジェクト)
 * @param {objet} CityObject2 - 回答都市の情報(オブジェクト)
 * @param {objet} targetObject - 正解都市の情報(オブジェクト)が入った配列
 * @param {objet} inputAnswerObject - 回答欄に記入した都市の情報(オブジェクト)
 *  * @returns {any} number 与えられた引数を、与えられた関数に渡したときの返り値
 */


// setTimeout(function () {
//     cityQuiz();
// }, 100);

console.log("DIG基礎コースFD20 卒業制作");


function cityQuiz() {
    let candidate;
    let tempCandidate;
    let money = 100;

    let moneyDisplay = document.getElementById('moneyDisplay');
    moneyDisplay.textContent = "賞金：" + money + "万円";
    // destination.textContent = targetObject["city"];

    const cityInfo = [
        {
            number: 1,
            city: "札幌市",
            pref: "北海道",
            area: "北海道東北",
            lati: 43.06861,
            longi: 141.34667
        },
        {
            number: 2,
            city: "釧路市",
            pref: "北海道",
            area: "北海道東北",
            lati: 42.98491,
            longi: 144.39032
        },
        {
            number: 3,
            city: "石巻市",
            pref: "宮城県",
            area: "北海道東北",
            lati: 38.43308,
            longi: 141.30213
        },
        {
            number: 4,
            city: "仙台市",
            pref: "宮城県",
            area: "北海道東北",
            lati: 38.26822,
            longi: 140.87178
        },
        {
            number: 5,
            city: "山形市",
            pref: "山形県",
            area: "北海道東北",
            lati: 38.25544,
            longi: 140.36341
        },
        {
            number: 6,
            city: "米沢市",
            pref: "山形県",
            area: "北海道東北",
            lati: 37.92222,
            longi: 140.11523
        },

        {
            number: 7,
            city: "さいたま市",
            pref: "埼玉県",
            area: "関東",
            lati: 35.86166,
            longi: 139.62379
        },
        {
            number: 8,
            city: "秩父市",
            pref: "埼玉県",
            area: "関東",
            lati: 35.99218,
            longi: 139.08268
        },
        {
            number: 9,
            city: "横浜市",
            pref: "神奈川県",
            area: "関東",
            lati: 35.44768,
            longi: 139.63802
        },
        {
            number: 10,
            city: "鎌倉市",
            pref: "神奈川県",
            area: "関東",
            lati: 35.31905,
            longi: 139.53062
        },
        {
            number: 11,
            city: "千葉市",
            pref: "千葉県",
            area: "関東",
            lati: 35.60727,
            longi: 140.12398
        },
        {
            number: 12,
            city: "浦安市",
            pref: "千葉県",
            area: "関東",
            lati: 35.6349,
            longi: 139.8796
        },
        {
            number: 13,
            city: "金沢市",
            pref: "石川県",
            area: "中部",
            lati: 36.5613,
            longi: 136.6562
        },
        {
            number: 14,
            city: "輪島市",
            pref: "石川県",
            area: "中部",
            lati: 37.3953,
            longi: 136.8995
        },
        {
            number: 15,
            city: "名古屋市",
            pref: "愛知県",
            area: "中部",
            lati: 35.1815,
            longi: 136.9066
        },
        {
            number: 16,
            city: "豊田市",
            pref: "愛知県",
            area: "中部",
            lati: 35.0812,
            longi: 137.1708
        },
        {
            number: 17,
            city: "静岡市",
            pref: "静岡県",
            area: "中部",
            lati: 34.9756,
            longi: 138.3824
        },
        {
            number: 18,
            city: "浜松市",
            pref: "静岡県",
            area: "中部",
            lati: 34.7104,
            longi: 137.7268
        },
        {
            number: 19,
            city: "京都市",
            pref: "京都府",
            area: "近畿",
            lati: 35.0117,
            longi: 135.5592
        },
        {
            number: 20,
            city: "舞鶴市",
            pref: "京都府",
            area: "近畿",
            lati: 35.4575,
            longi: 135.3332
        },
        {
            number: 21,
            city: "大津市",
            pref: "滋賀県",
            area: "近畿",
            lati: 35.0044,
            longi: 135.8686
        },
        {
            number: 22,
            city: "長浜市",
            pref: "滋賀県",
            area: "近畿",
            lati: 35.5982,
            longi: 136.1286
        },
        {
            number: 23,
            city: "神戸市",
            pref: "兵庫県",
            area: "近畿",
            lati: 34.6913,
            longi: 135.1830
        },
        {
            number: 24,
            city: "姫路市",
            pref: "兵庫県",
            area: "近畿",
            lati: 34.8151,
            longi: 134.6850
        },
        {
            number: 25,
            city: "広島市",
            pref: "広島県",
            area: "中国四国",
            lati: 34.3853,
            longi: 132.4553
        },
        {
            number: 26,
            city: "尾道市",
            pref: "広島県",
            area: "中国四国",
            lati: 34.4063,
            longi: 133.2044
        },
        {
            number: 27,
            city: "出雲市",
            pref: "島根県",
            area: "中国四国",
            lati: 35.3665,
            longi: 132.7554
        },
        {
            number: 28,
            city: "松江市",
            pref: "島根県",
            area: "中国四国",
            lati: 35.4572,
            longi: 133.065
        },
        {
            number: 29,
            city: "松山市",
            pref: "愛媛県",
            area: "中国四国",
            lati: 33.8392,
            longi: 132.7654
        },
        {
            number: 30,
            city: "今治市",
            pref: "愛媛県",
            area: "中国四国",
            lati: 34.0667,
            longi: 133.0027
        },
        {
            number: 31,
            city: "福岡市",
            pref: "福岡県",
            area: "九州沖縄",
            lati: 33.5904,
            longi: 130.4017
        },
        {
            number: 32,
            city: "太宰府市",
            pref: "福岡県",
            area: "九州沖縄",
            lati: 33.5128,
            longi: 130.5231
        },
        {
            number: 33,
            city: "熊本市",
            pref: "熊本県",
            area: "九州沖縄",
            lati: 32.8032,
            longi: 130.7081
        },
        {
            number: 34,
            city: "阿蘇市",
            pref: "熊本県",
            area: "九州沖縄",
            lati: 32.9826,
            longi: 131.1016
        },
        {
            number: 35,
            city: "那覇市",
            pref: "沖縄県",
            area: "九州沖縄",
            lati: 26.2124,
            longi: 127.6809
        },
        {
            number: 36,
            city: "石垣市",
            pref: "沖縄県",
            area: "九州沖縄",
            lati: 24.4064,
            longi: 124.1759
        },
    ]

    moneyDisplay = document.getElementById('moneyDisplay');
    let targetObject;
    const correctAnswer = Math.ceil(Math.random() * 36);   //乱数により正解都市を決定
    for (const cityObject of cityInfo) { //cityNumの都市名を表示する
        if (correctAnswer === cityObject["number"]) {
            targetObject = cityObject;// ランダムに選択された都市情報を取得
            console.log("正解都市名： " + targetObject["city"]);  //正解都市県名を表示  
            console.log("正解県名= " + targetObject["pref"])   //正解県名を表示
            console.log("正解地域名= " + targetObject["area"])   //正解地域を表示
            console.log("正解緯度= " + targetObject["lati"])   //正解緯度を表示
            console.log("正解経度= " + targetObject["longi"])   //正解経度を表示

            let inputCheck = "";
            let inputAnswer = prompt("🚅🚅🚅さあ、〇〇市へでかけましょう！✈✈✈　　　　　賞金：" + money + "万円" + "\n"
                + "【都市名候補】" + "\n" 
                + "　(北海道東北)　札幌市 釧路市 石巻市 仙台市 山形市 米沢市"  + "\n" 
                + "　(関東)　　　　さいたま市 秩父市 横浜市 鎌倉市 千葉市 浦安市"  + "\n" 
                + "　(中部)　　　　金沢市 輪島市 名古屋市 豊田市 静岡市 浜松市" + "\n" 
                + "　(近畿)　　　　京都市 舞鶴市 大津市 長浜市 神戸市 姫路市" + "\n" 
                + "　(中国四国)　　広島市 尾道市 松江市 出雲市 松山市 今治市" + "\n" 
                + "　(九州沖縄)　　福岡市 太宰府市 熊本市 阿蘇市 那覇市 石垣市")

            function checkAnswer(inputAnswer) {
                let inputAnswerObject = {};
                while (inputAnswer !== targetObject["city"]) {
                    inputCheck = "入力値は候補外です。再入力してください　　　　　　　"; // ループの中で初期化
                    let northSouth = "";
                    let eastWest = "";
                    let areaCheck = "";
                    let prefCheck = "";

                    for (const CityObject2 of cityInfo) {   //回答都市オブジェクトを取り出し     
                        if (inputAnswer === CityObject2["city"]) {
                            inputCheck = "❌残念！ " + inputAnswer + "ではありません❌　　　　　　　　　"; // 一致→正規として設定
                            inputAnswerObject = CityObject2;    //回答都市のオブジェクトを決定
                            if ((targetObject["lati"] - inputAnswerObject["lati"]) > 3) {
                                northSouth = "⬆⬆⬆目的地はすごく北　";
                            } else if ((targetObject["lati"] - inputAnswerObject["lati"]) > 1) {
                                northSouth = "⬆⬆目的地はけっこう北　";
                            } else if ((targetObject["lati"] - inputAnswerObject["lati"]) > 0) {
                                northSouth = "⬆目的地はちょっと北　";
                            } else if (targetObject["lati"] - inputAnswerObject["lati"] === 0) {
                                northSouth = "やったね！";
                            } else if ((targetObject["lati"] - inputAnswerObject["lati"]) > -1) {
                                northSouth = ("⬇目的地はちょっと南　");
                            } else if ((targetObject["lati"] - inputAnswerObject["lati"]) > -3) {
                                northSouth = ("⬇⬇目的地はけっこう南　");
                            } else {
                                northSouth = ("⬇⬇⬇目的地はすごく南　");
                            }
                            if ((targetObject["longi"] - inputAnswerObject["longi"]) > 2) {
                                eastWest = "➡➡➡すごく東です。";
                            } else if ((targetObject["longi"] - inputAnswerObject["longi"]) > 1) {
                                eastWest = "➡➡けっこう東です。";
                            } else if ((targetObject["longi"] - inputAnswerObject["longi"]) > 0) {
                                eastWest = "➡ちょっと東です。";
                            } else if ((targetObject["longi"] - inputAnswerObject["longi"]) === 0) {
                                eastWest = "やったね！";
                            } else if ((targetObject["longi"] - inputAnswerObject["longi"]) > -1) {
                                eastWest = "⬅ちょっと西です。";
                            } else if ((targetObject["longi"] - inputAnswerObject["longi"]) > -2) {
                                eastWest = "⬅⬅けっこう西です。";
                            } else {
                                eastWest = "⬅⬅⬅すごく西です";
                            }
                        }
                    }

                    if (targetObject["area"] === inputAnswerObject["area"]) {
                        areaCheck = "同じ" + targetObject["area"] + "です"
                        if (targetObject["pref"] === inputAnswerObject["pref"]) {
                            prefCheck = "同じ" + targetObject["pref"] + "です"
                        } else {
                            prefCheck = inputAnswerObject["pref"] + "ではありません"
                        }
                    } else {
                        areaCheck = "目的地は" + inputAnswerObject["area"] + "ではありません"
                        prefCheck = "";
                    }

                    money = money - 10;
                    inputAnswer = prompt(inputCheck + "賞金：" + money + "万円" + "\n"
                        + "　🤔【ヒント①】　" + areaCheck + "　" + prefCheck + "\n"
                        + "　🤔【ヒント②】　" + northSouth + eastWest
                        + "\n" 
                        + "　　(北海道東北)　札幌市 釧路市 石巻市 仙台市 山形市 米沢市 " + "\n" 
                        + "　　(関東)　　　　さいたま市 秩父市 横浜市 鎌倉市 千葉市 浦安市" + "\n" 
                        + "　　(中部)　　　　金沢市 輪島市 名古屋市 豊田市 静岡市 浜松市"  + "\n" 
                        + "　　(近畿)　　　　京都市 舞鶴市 大津市 長浜市 神戸市 姫路市"  + "\n" 
                        + "　　(中国四国)　　広島市 尾道市 松江市 出雲市 松山市 今治市" + "\n"
                        + "　　(九州沖縄)　　福岡市 太宰府市 熊本市 阿蘇市 那覇市 石垣市")

                }
                console.log("やったね！");
                document.getElementById("destination").textContent = "さあ、" + inputAnswer + "へ行ってらっしゃい！";
            }
            checkAnswer(inputAnswer);
        }
    }
    moneyDisplay.textContent = "賞金：" + money + "万円！";

}

cityQuiz()

