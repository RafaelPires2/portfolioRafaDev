const cardSkills = document.querySelectorAll('.cards-skills')
const description = document.querySelector('.description')

const skills = {
    html:'html é ...',
    css:'css3 é ...',
    javascript:'javascript é ...',
    sass:'SASS é ...',
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