{

const tasks = [
    {
        content: "Nauczyć się jednego modułu",
        done: false,
    },
    {
        content: "Włączyć robota sprzątającego",
        done: true,
    },
];

const render = () => {

    let htmlString = "";

    for (const task of tasks) {

        htmlString += `
        <li>
        ${task.content}
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
}
const init = () => {
    render();


};


init();

}