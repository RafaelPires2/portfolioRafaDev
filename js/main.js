const cardSkills = document.querySelectorAll('.cards-skills')
const description = document.querySelector('.description')
const titleSkill = document.querySelectorAll('h10')


const skills = {
    html:'HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais irnformações a página vai exibir.',
    css:'CSS é uma linguagem de folhas de estilo composta por "camadas", criado com o propósito de estilizar as páginas HTML.',
    javascript:'JavaScript é uma linguaguem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
    sass:'Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass.',
    reactjs:'O ReactJS é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    git: 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.',
    default:'*passe o cursor do mouse no card para ler*'
}

cardSkills.forEach(function(cardSkill){
    cardSkill.addEventListener('mouseover', function(){
        description.innerHTML = skills[cardSkill.getAttribute('name')]
  
    })
   
    cardSkill.addEventListener('mouseout', function(){
        description.innerHTML = skills.default
      
    })
})


const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
const body = document.querySelector('body')
const navMenu = document.querySelector('.nav-menu')

function removeMenuExpanded(){
    body.classList.remove('menuExpanded')
    btnClose.classList.add('displayNone')

    navMenu.classList.remove('displayNone')
}
function addMenuExpanded(){
    body.classList.add('menuExpanded')
    btnClose.classList.remove('displayNone')
    
    navMenu.classList.remove('displayNone')
}
