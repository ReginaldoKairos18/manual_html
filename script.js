let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const textoFormatado = document.getElementById('texto-formatado');

function atualizarSlide(index){
    slides[slideIndex].classList.remove('active');
    slideIndex = (index + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');

    aplicarFormatacao(slides[slideIndex].dataset.tag);

    console.log(slideIndex)
}

function aplicarFormatacao(tag){
    textoFormatado.innerHTML = "Texto Formatado.";
    textoFormatado.removeAttribute('class');

    switch(tag){
        case 'strong':
            textoFormatado.innerHTML = `&lt;strong&gt;<strong>${textoFormatado.innerHTML}</strong>&lt;/strong&gt;`;
            break;
        case 'em':
            textoFormatado.innerHTML = `&lt;em&gt;<em>${textoFormatado.innerHTML}</em>&lt;/em&gt;`;
            break;
        case 'mark':
            textoFormatado.innerHTML = `&lt;mark&gt;<mark>${textoFormatado.innerHTML}</mark>&lt;/mark&gt;`;
            break;
        case 'small':
            textoFormatado.innerHTML = `&lt;small&gt;<small>${textoFormatado.innerHTML}</small>&lt;/small&gt;`;
            break;
        case 'del':
            textoFormatado.innerHTML = `&lt;del&gt;<del>${textoFormatado.innerHTML}</del>&lt;/del&gt;`;
            break;
        case 'ins':
            textoFormatado.innerHTML = `&lt;ins&gt;<ins>${textoFormatado.innerHTML}</ins>&lt;/ins&gt;`;
            break;
        case 'sub':
            textoFormatado.innerHTML = `&lt;sub&gt;<sub>${textoFormatado.innerHTML}</sub>&lt;/sub&gt;`;
            break;
        case 'sup':
            textoFormatado.innerHTML = `&lt;sup&gt;<sup>${textoFormatado.innerHTML}</sup>&lt;/sup&gt;`;
            break;

        default:
            break;
    }
}

atualizarSlide(slideIndex);

document.querySelector('.next').addEventListener('click', () => atualizarSlide(slideIndex + 1));
document.querySelector('.prev').addEventListener('click', () => atualizarSlide(slideIndex - 1));

//Editor de Código HTML

const htmlCode = document.getElementById('html-code');
const previewWindow = document.getElementById('preview-window');
const styledCode = document.getElementById('style-code')

function applySyntaxHighlighting(code) {
    return code
        // Estiliza comentários
        //.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="comment">$1</span>')
        // Estiliza tags HTML
            .replace(/(&lt;\/?)([a-z][a-z0-9]*)([^&gt;]*)(?=&gt;)/gi, '$1<span class="tag">$2</span>$3');

        // Estiliza atributos e valores
        //.replace(/(\b[a-z-]+)/gi, '<span class="attribute">$1</span>');
}

function renderPreview(){
    const htmlContent = htmlCode.value;
    const escapedContent = htmlContent
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    console.log(applySyntaxHighlighting(escapedContent));
    styledCode.innerHTML = applySyntaxHighlighting(escapedContent);
    //styledCode.innerHTML = htmlCode.value;

    previewWindow.contentDocument.open();
    previewWindow.contentDocument.write(htmlCode.value);
    previewWindow.contentDocument.close();
}

window.addEventListener('DOMContentLoaded', renderPreview);
htmlCode.addEventListener('input', renderPreview)

//Barra Navegação
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () =>{
    navLinks.classList.toggle('nav-active');
});

document.addEventListener('click', (e) =>{
    if(!menuIcon.contains(e.target) && !navLinks.contains(e.target)){
        navLinks.classList.remove('nav-active');
    }
});

//navegação de abas
let abaIndex = 0;
const abasNav = document.querySelectorAll('.aba');
const abasConteudo = document.querySelectorAll('.aba-conteudo');

abasNav.forEach((aba, index) =>{
    aba.addEventListener('click', () =>{
        console.log(aba.className);

        abasNav.forEach(aba => aba.classList.remove('aberta'));
        abasConteudo.forEach(conteudo => conteudo.classList.remove('aberta'));

        aba.classList.add('aberta');
        abasConteudo[index].classList.add('aberta');
    });
});