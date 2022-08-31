const backTop = document.querySelector("#backTop");

function scroll(){
    showBackTop();
    ScrollReveal();

}

function showBackTop() {
    if (scrollY < 700) {
     backTop.classList.remove('show');
    } else {
     backTop.classList.add('show');
    }
  }

ScrollReveal({
    origin:'top',
    distance:'3rem',
    duration:700,
  }).reveal(`

#home,
#about .col-a .icon,
#about .col-b h1,
#about .col-b span,
#about .col-b h2,
#projects .box-txt,
.card1,
.card2,
.card3,
#services .box-txt,
.card-serv1,
.card-serv2,
.card-serv3,
#skills h1,
.description,
.cards-skills,
#footer

  `);

