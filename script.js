
function checkAnswers() {
    const correctAnswers = [
        "syncytiotrophoblast",
        "start contractions & posterior pituitary gland",
        "parasympathetic S2 & S3",
        "Sertoli cells",
        "more spermatogonia",
        "pseudostratified column epithelium with stereocilia"
    ];

    let score = 0;
    for (let i = 1; i <= 6; i++) {
        const selected = document.querySelector('input[name="q' + i + '"]:checked');
        if (selected && selected.value.toLowerCase() === correctAnswers[i - 1].toLowerCase()) {
            score++;
        }
    }

    if (score === 6) {
        window.location.href = "https://collage-l2o25jcko-bdwdwbhws-projects.vercel.app/";
    } else {
        alert("You got " + score + "/6! Try again, smartypants 💖");
    }
}
