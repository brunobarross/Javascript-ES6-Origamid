function $$(selectedEelements) {
  const elements = document.querySelectorAll(selectedEelements)

  function hide() {
    elements.forEach(element => {
      element.style.display = "None"
    })
    /* retorno o próprio elemento para que possa usar outros métodos nele*/
    // return $$(selectedEelements)
    return this
  }

  function show() {
    elements.forEach(element => {
      element.style.display = "initial";
    })

    // return $$(selectedEelements)
    return this
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    })
    // return $$(selectedEelements)
    return this
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className)
    })
    // return $$(selectedEelements)
    return this
  }


  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className)
    })
    // return $$(selectedEelements)
    return this
  }

  function toggleClass(className) {
    elements.forEach(element => {
      element.classList.toggle(className)
    })
    return this
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
    toggleClass

  }
}

const btns = $$('button')


console.log(btns.hide().show())



const handleClick = (event) => {
  // btns.addClass('ativo')
  btns.toggleClass('ativo')
}


btns.on('click', handleClick)

