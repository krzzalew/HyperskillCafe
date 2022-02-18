// Call addReview function on submitting the form and prevent the page from refreshing.
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addReview();
});

// Create a new review card on form submission.
function addReview() {

    // Set text variables from input fields values.
    const title = document.getElementById('reviewTitle').value;
    const text = document.getElementById('reviewText').value;
    let name = document.getElementById('reviewName').value;
    if (name === '') {
        name = 'Anonymous';
    }

    // Create all the necessary elements for a new review card and determine their appropriate classes.
    const row = document.getElementById('reviewsRow');
    const col = document.createElement('div');
    col.className = "col-lg-4 col-md-6 py-3";
    const card = document.createElement('div');
    card.className = "card h-100";
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    const cardTitle = document.createElement('h4');
    cardTitle.className = "card-title";
    const blockquote = document.createElement('blockquote');
    blockquote.className = "blockquote mb-0";
    const paragraph = document.createElement('p');
    const footer = document.createElement('footer');
    const italic = document.createElement('i');
    footer.className = "blockquote-footer text-end";

    // Create TextNode elements.
    const cardTitleText = document.createTextNode(title);
    const paraText = document.createTextNode(text);
    const footerText = document.createTextNode(name);

    // Append child elements to their parents to create a proper HTML structure.
    cardTitle.appendChild(cardTitleText);
    paragraph.appendChild(paraText);
    italic.appendChild(footerText);
    footer.appendChild(italic);
    blockquote.appendChild(paragraph);
    blockquote.appendChild(footer);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(blockquote);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);

    // Clear the input fields.
    document.getElementById('reviewTitle').value = '';
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewName').value = '';
}