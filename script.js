const URL = "https://type.fit/api/quotes";

fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    mainFunc(data);
});

function mainFunc(data) {
    let button = document.getElementById("quoteButton");
    button.addEventListener("click", function() {
        let display = document.getElementById("quoteDisplay");
        const index = Math.floor(Math.random() * data.length);
        display.innerText = `${data[index].text} - ${data[index].author}`;
    });
}