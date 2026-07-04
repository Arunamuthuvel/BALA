let answers = {};

function nextQuestion(current) {

    let selected = document.querySelector(
        'input[name="q' + current + '"]:checked'
    );

    if (!selected) {
        alert("Please choose an option!");
        return;
    }

    answers[current] = selected.parentElement.innerText;

    document.getElementById("q" + current).style.display = "none";
    document.getElementById("q" + (current + 1)).style.display = "block";
}

function finishQuiz() {

    let selected = document.querySelector('input[name="q7"]:checked');

    if (!selected) {
        alert("Please choose an option!");
        return;
    }

    window.location.href = "gallery.html";
}


function restartQuiz() {
    location.reload();
}

let photos = [
    "images/school.jpeg",
    "images/function.jpeg",
    "images/temple.jpeg",
    "images/bala.jpeg"
];

let captions = [
    "School Memories ❤️",
    "Function Day 🎉",
    "Temple Visit 🙏",
    "School Image 📸"
];
let current=0;

function showPic() {
    document.getElementById("photoArea").innerHTML =
        `<img src="${photos[current]}" class="photo">`;

    document.getElementById("caption").innerHTML =
        captions[current];

    document.getElementById("caption").style.display = "block";
    document.getElementById("nextBtn").style.display = "inline-block";
}

function nextImage() {

    current++;

    if (current >= photos.length) {

        document.getElementById("photoArea").innerHTML = `
            <div class="end-message">
                <h1>💖 A Small Message For You 💖</h1>
                <p>Thank you for being such an important part of my life.
                every moment we shared became a beautiful memory.🤌🥺
                No matter where life takes us, I hope our friendship
                stays forever. 🫶🫂
            </div>
        `;

        document.getElementById("caption").innerHTML = "";
        document.getElementById("nextBtn").style.display = "none";
        return;
    }

    document.getElementById("photoArea").innerHTML =
        `<img src="${photos[current]}" class="photo">`;

    document.getElementById("caption").innerHTML =
        captions[current];
}