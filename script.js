// 作品一覧
const works = [
    {
        title: "carmine",
        link: "carmine.html"
    },

    {
        title: "操り人形と死の演者"
    },

    {
        title: "青少年特別生活監査所監査記録"
    },

    {
        title: "vindicoses",
        link: "vindicoses.html"
    }
];


// 作品一覧を表示
const workList = document.getElementById("work-list");

if (workList) {

    works.forEach(function(work) {

        const card = document.createElement("div");
        card.className = "work-card";

        if (work.link) {

            const link = document.createElement("a");
            link.href = work.link;

            const title = document.createElement("h3");
            title.textContent = work.title;

            link.appendChild(title);
            card.appendChild(link);

        } else {

            const title = document.createElement("h3");
            title.textContent = work.title;

            card.appendChild(title);

        }

        workList.appendChild(card);

    });

}



// 作品ごとのキャラクター一覧
const characterLists = {

    // vindicoses
    vindicoses: [
        { name: "赤薔薇", englishName: "Red Rose", page: "character.html?work=vindicoses&id=red-rose" },
        { name: "桃薔薇", englishName: "Pink Rose", page: "character.html?work=vindicoses&id=pink-rose" },
        { name: "橙薔薇", englishName: "Orange Rose", page: "character.html?work=vindicoses&id=orange-rose" },
        { name: "黄薔薇", englishName: "Yellow Rose", page: "character.html?work=vindicoses&id=yellow-rose" },
        { name: "緑薔薇", englishName: "Green Rose", page: "character.html?work=vindicoses&id=green-rose" },
        { name: "青薔薇", englishName: "Blue Rose", page: "character.html?work=vindicoses&id=blue-rose" },
        { name: "紫薔薇", englishName: "Purple Rose", page: "character.html?work=vindicoses&id=purple-rose" },
        { name: "黒薔薇", englishName: "Black Rose", page: "character.html?work=vindicoses&id=black-rose" },
        { name: "白薔薇", englishName: "White Rose", page: "character.html?work=vindicoses&id=white-rose" },
        { name: "金薔薇", englishName: "Gold Rose", page: "character.html?work=vindicoses&id=gold-rose" },
        { name: "銀薔薇", englishName: "Silver Rose", page: "character.html?work=vindicoses&id=silver-rose" },
        { name: "銅薔薇", englishName: "Bronze Rose", page: "character.html?work=vindicoses&id=bronze-rose" },
        { name: "虹薔薇", englishName: "Rainbow Rose", page: "character.html?work=vindicoses&id=rainbow-rose" }
    ],


    // carmine
    carmine: [
        { name: "ルクス・ルアンダル", englishName: "Lucs Luandall", page: "character.html?work=carmine&id=Lucs" },
        { name: "テトラ・ルアンダル", englishName: "Tetra Luandall", page: "character.html?work=carmine&id=Tetra" },
        { name: "アカシア・ステラビート", englishName: "Acacia Stellabeat", page: "character.html?work=carmine&id=Acacia" },
        { name: "幻覚ルクス", englishName: "Imaginary Lucs", page: "character.html?work=carmine&id=Imaginary" },
        { name: "テトラボット", englishName: "Tetra Bot", page: "character.html?work=carmine&id=Bot" },
    ]

};



// キャラクター一覧を表示
const characterList = document.getElementById("character-list");

if (characterList) {

    // HTML側のdata-workから作品名を取得
    const workId = document.body.dataset.work;

    // 該当する作品のキャラクター一覧を取得
    const characters = characterLists[workId] || [];

    characters.forEach(function(character) {

        const card = document.createElement("div");
        card.className = "character-card";

        const link = document.createElement("a");
        link.href = character.page;

        const name = document.createElement("h2");
        name.textContent = character.name;

        const englishName = document.createElement("p");
        englishName.textContent = character.englishName;

        link.appendChild(name);
        link.appendChild(englishName);

        card.appendChild(link);
        characterList.appendChild(card);

    });

}

// 隠しキャラクター設定
const secretCharacters = {
    "tetra": "images/secret/tetra.png"
};

let secretInput = "";

document.addEventListener("keydown", function(event) {

    // Ctrlなどの特殊キーは無視
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    // 英字以外は無視
    if (!/^[a-zA-Z]$/.test(event.key)) return;

    secretInput += event.key.toLowerCase();

    // 入力が長くなりすぎないようにする
    if (secretInput.length > 30) {
        secretInput = secretInput.slice(-30);
    }

    // キャラクター名と照合
    for (const name in secretCharacters) {

        if (secretInput.endsWith(name)) {

            showSecretCharacter(secretCharacters[name]);

            secretInput = "";
            break;
        }
    }
});

function showSecretCharacter(imagePath) {

    const container = document.getElementById("secret-character");
    const image = document.getElementById("secret-character-image");

    // HTML要素が存在しなければ終了
    if (!container || !image) return;

    // アニメーション中なら再生し直さない
    if (container.classList.contains("show")) return;

    // 画像を読み込む
    image.src = new URL(imagePath, document.baseURI).href;

    container.classList.remove("show");

    // アニメーションを再実行
    void container.offsetWidth;

    container.classList.add("show");

    setTimeout(() => {
        container.classList.remove("show");
    }, 1200);
}