const cardSkills = document.querySelectorAll('.cards-skills')
const description = document.querySelector('.description')
const titleSkill = document.querySelectorAll('h10')


const skills = {
    html:'HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais irnformações a página vai exibir.',
    css:'CSS é uma linguagem de folhas de estilo composta por "camadas", criado com o propósito de estilizar as páginas HTML.',
    javascript:'JavaScript é uma linguaguem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
    sass:'Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass.',
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


const backTop = document.querySelector("#backTop");

function showBackTop() {
    if (scrollY < 700) {
     backTop.classList.remove('show');
    } else {
     backTop.classList.add('show');
    }
  }
  console.log(scrollY)
