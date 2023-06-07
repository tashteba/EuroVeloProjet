// Récupération des pièces depuis le fichier JSON
const r = await fetch('http://85.169.220.243:5006/api/visiteurs');
const d = await r.json();

const main = document.getElementById("main-avis-list");

main.innerHTML = `
    <h2 class="avis-title-list">Voici la liste de tous les avis !</h2>
        <div class="avis-zone-list">
            <div class="avis-block-container-list">
`;

for (let i = 0; i < d.data.length; i++) {

    // Affichage des éléments
    main.innerHTML += `
            <div class="avis-block1-list">

                <p id="avis-block-date-list ${i}" class="avis-block-date-list">${d.data[i].attributes.date}</p>
                <h3 id="avis-block-name-list ${i}" class="avis-block-name-list">${d.data[i].attributes.name}</h3>
                <h5 id="avis-rating-list ${i}" class="avis-rating-list">${d.data[i].attributes.rating} étoiles</h5>
                <p id="avis-localisation-list ${i}">${d.data[i].attributes.localisation}</p>
                <br>
                <div class="avis-notation-lists-block-list">

                    <div class="avis-notes-block-list">
                        <h4 id="avis-notation-list1 ${i}" class="avis-notation-list">${d.data[i].attributes.notation1}/5</h4>
                        <p class="avis-label-notation-list1">Sécurité</p>
                    </div>

                    <div class="avis-notes-block-list">
                        <h4 id="avis-notation-list2 ${i}" class="avis-notation-list">${d.data[i].attributes.notation2}/5</h4>
                        <p class="avis-label-notation-list2">Balisage</p>
                    </div>

                    <div class="avis-notes-block-list">
                        <h4 id="avis-notation-list3 ${i}" class="avis-notation-list">${d.data[i].attributes.notation3}/5</h4>
                        <p class="avis-label-notation-list3">Intérêt</p>
                    </div>

                    <div class="avis-notes-block-list">
                        <h4 id="avis-notation-list4 ${i}" class="avis-notation-list">${d.data[i].attributes.notation4}/5</h4>
                        <p class="avis-label-notation-list4">Services</p>
                    </div>

                </div>
                <br>
                <h4 id="avis-comment-object-list ${i}">${d.data[i].attributes.commentObject}</h4>
                <p id="avis-comment-content-list ${i}" class="avis-comment-content-list">${d.data[i].attributes.commentContent}</p>
                <div class="avis-infos-container-list">
                    <h5 id="avis-responses-count-list ${i}">${d.data[i].attributes.responses} réponses</h5>
                </div>

            </div>
    `;

}

main.innerHTML += `
</div></div></div>
`;