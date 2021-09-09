const falafel = document.getElementById('falafel');
const chorizo = document.getElementById('chorizo');
const masala = document.getElementById('masala');
const cheeseCake = document.getElementById('cheeseCake');
const borscht = document.getElementById('borscht');
const cupcake = document.getElementById('cupcake');
const crumble = document.getElementById('crumble');
const pistachio = document.getElementById('pistachio');

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
        case 'cheeseCake':
            cheeseCake.style.display === 'block' ? cheeseCake.style.display = 'none' : cheeseCake.style.display = 'block';
            break;
        case 'borscht':
            borscht.style.display === 'block' ? borscht.style.display = 'none' : borscht.style.display = 'block';
            break;
        case 'cupcake':
            cupcake.style.display === 'block' ? cupcake.style.display = 'none' : cupcake.style.display = 'block';
            break;
        case 'crumble':
            crumble.style.display === 'block' ? crumble.style.display = 'none' : crumble.style.display = 'block';
            break;
        case 'pistachio':
            pistachio.style.display === 'block' ? pistachio.style.display = 'none' : pistachio.style.display = 'block';
            break;
    }
}