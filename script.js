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



const characters = [
    {
        name: "赤薔薇",
        englishName: "Red Rose",
        page: "red-rose.html"
    },

    {
        name: "桃薔薇",
        englishName: "Pink Rose",
        page: "pink-rose.html"
    },

    {
        name: "橙薔薇",
        englishName: "Orange Rose",
        page: "orange-rose.html"
    },

    {
        name: "黄薔薇",
        englishName: "Yellow Rose",
        page: "yellow-rose.html"
    },

    {
        name: "緑薔薇",
        englishName: "Green Rose",
        page: "green-rose.html"
    },

    {
        name: "青薔薇",
        englishName: "Blue Rose",
        page: "blue-rose.html"
    },

    {
        name: "紫薔薇",
        englishName: "Purple Rose",
        page: "purple-rose.html"
    },

    {
        name: "黒薔薇",
        englishName: "Black Rose",
        page: "black-rose.html"
    },

    {
        name: "白薔薇",
        englishName: "White Rose",
        page: "white-rose.html"
    },

    {
        name: "金薔薇",
        englishName: "Gold Rose",
        page: "gold-rose.html"
    },

    {
        name: "銀薔薇",
        englishName: "Silver Rose",
        page: "silver-rose.html"
    },

    {
        name: "銅薔薇",
        englishName: "Bronze Rose",
        page: "bronze-rose.html"
    },

    {
        name: "虹薔薇",
        englishName: "Rainbow Rose",
        page: "rainbow-rose.html"
    }
];


const characterList = document.getElementById("character-list");


if (characterList) {

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