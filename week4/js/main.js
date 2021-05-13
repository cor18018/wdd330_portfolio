const form = document.forms[0];
const input = form.elements.searchInput;
input.addEventListener('change', () => alert('changed'), false);
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
}
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}