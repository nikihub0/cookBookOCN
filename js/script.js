const falafel = document.getElementById('falafel');
const chorizo = document.getElementById('chorizo');
const masala = document.getElementById('masala');

const toggleInfo = (param) => {
    switch (param) {
        case 'falafel':
            falafel.style.display === 'block' ? falafel.style.display = 'none' : falafel.style.display = 'block';
            break;
        case 'chorizo':
            chorizo.style.display === 'block' ? chorizo.style.display = 'none' : chorizo.style.display = 'block';
            break;
        case 'masala':
            masala.style.display === 'block' ? masala.style.display = 'none' : masala.style.display = 'block';
            break;
    }
}