document.getElementById("avisform").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var dateForm = document.getElementById("date").value;
    var nameForm = document.getElementById("name").value;
    var localisationForm = document.getElementById("localisation").value;
    var commentObjectForm = document.getElementById("cobject").value;
    var commentContentForm = document.getElementById("content").value;

    var data1 = {
        date: dateForm,
        name: nameForm,
        localisation: localisationForm,
        commentObject: commentObjectForm,
        commentContent: commentContentForm
    };

    fetch("http://85.169.220.243:5006/api/visiteurs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data1)
    })
    .then(response => {
        if (response.ok) {
            console.log("Données envoyées avec succès !");
        } else {
            throw new Error("Erreur lors de l'envoi des données.");
        }
    })
    .catch(error => {
        console.error(error);
    });
});
