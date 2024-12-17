const container = document.querySelector('.container');
const detailsContent = document.querySelector('.detailscontent');
const right = document.querySelector('.right');
const detailsSummary = document.querySelector('.detailssummary');

container.addEventListener('click', () => {
    if (detailsContent.style.display === 'none' || detailsContent.style.display === '') {
        detailsContent.style.display = 'block';
        right.setAttribute('name', 'down-arrow');
        detailsSummary.textContent = 'Hide details';
    } else {
        detailsContent.style.display = 'none';
        right.setAttribute('name', 'right-arrow');
        detailsSummary.textContent = 'Show details';
    }
});