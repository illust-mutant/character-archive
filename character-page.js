// URLから作品IDとキャラクターIDを取得する
const params = new URLSearchParams(window.location.search);
const workId = params.get("work");
const characterId = params.get("id");

// 作品IDとキャラクターIDからキャラクター情報を取得する
const workData = characterData[workId];
const character = workData ? workData[characterId] : null;

// 戻るリンクの設定
const listPages = {
vindicoses: "vindicoses-characters.html",
carmine: "carmine-characters.html"
};

const backLink = document.getElementById("back-link");

if (backLink && listPages[workId]) {
backLink.href = listPages[workId];
}

// キャラクターが存在するか確認する
if (character) {
// 名前と英語名を表示する
document.getElementById("character-name").textContent = character.name;
document.getElementById("character-english-name").textContent = character.englishName;

// プロフィールを表示する
const profile = document.getElementById("character-profile");

// 内部名と表示名の対応表
const profileLabels = {
    realName: "本名",
    age: "年齢",
    gender: "性別",
    birthday: "誕生日",
    affiliation: "所属",
    codename: "コードネーム",
    firstPerson: "一人称"
};

// プロフィールを表示する
for (const key in character.profile) {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");

    dt.textContent = profileLabels[key] || key;
    dd.textContent = character.profile[key];

    profile.appendChild(dt);
    profile.appendChild(dd);
}

// 各紹介文を表示する
document.getElementById("character-description").textContent = character.description;
document.getElementById("character-history").textContent = character.history;
document.getElementById("character-relationships").textContent = character.relationships;

} else {
document.getElementById("character-name").textContent = "Character not found";
}
