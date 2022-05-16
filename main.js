window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar ?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = TargetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar ?

  // a seção termina onde ?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30pc',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`)
