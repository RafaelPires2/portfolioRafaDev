const cardSkills = document.querySelectorAll('.cards-skills')
const description = document.querySelector('.description')

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

//OUTRAS FORMAS DE FAZER A MESMA FUNÇÃO
// cardSkills.forEach((element, index) => {
// element.addEventListener('mouseover', function(){
//     description.innerHTML = skills[index]
// })

// element.addEventListener('mouseout', function(){
//     description.innerHTML = skills.default
// })

// });


// for(let i = 0; i < cardSkills.length; i++){
//     cardSkills[i].addEventListener('mouseover', function(){
//         description.innerHTML = skills[i]
//     })

//     cardSkills[i].addEventListener('mouseout', function(){
//         description.innerHTML = skills.default
//     })
// }


// cardSkills.forEach(function(cardSkill, index){
//     cardSkill.addEventListener('mouseover', function(){
//         description.innerHTML = skills[index]
//     })

//     cardSkill.addEventListener('mouseout', function(){
//         description.innerHTML = skills.default
//     })
// })