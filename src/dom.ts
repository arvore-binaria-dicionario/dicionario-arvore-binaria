const dictionaryContainer = document.getElementById(
  'dictionary-container',
) as HTMLElement

let words: Word[] = []

interface Word {
  id: number
  name: string
  significance: string
}

window.electron.getDictionary().then((data: Word[]) => {
  words = data
  console.log(words)
  if (words && dictionaryContainer) {
    words.forEach((word: Word) => {
      const wordElement = document.createElement('div')
      wordElement.textContent = word.name
      wordElement.classList.add('word-item')

      const popupElement = document.createElement('div')
      popupElement.classList.add('popup')

      const nameElement = document.createElement('div')
      nameElement.textContent = word.name
      nameElement.classList.add('name-item')

      const definitionElement = document.createElement('div')
      definitionElement.textContent = word.significance
      definitionElement.classList.add('definition-item')

      popupElement.appendChild(nameElement)
      popupElement.appendChild(definitionElement)

      const closeButtonElement = document.createElement('div')
      closeButtonElement.textContent = 'X'
      closeButtonElement.id = 'close-button'

      closeButtonElement.addEventListener('click', () => {
        document.body.removeChild(popupElement)
      })

      popupElement.appendChild(closeButtonElement)

      wordElement.addEventListener('click', () => {
        document.body.appendChild(popupElement)
        popupElement.classList.add('active')
        document.body.classList.add('overlay')
      })

      closeButtonElement.addEventListener('click', () => {
        popupElement.classList.remove('active')
        document.body.classList.remove('overlay')
      })

      dictionaryContainer.appendChild(wordElement)
    })
  }
})

function filterCards() {
  const input = document.getElementById('search-input') as HTMLInputElement
  const filter = input.value.toUpperCase()
  const cards = document.getElementsByClassName('word-item')

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i] as HTMLElement
    const textValue = card.textContent || card.innerText

    if (textValue.toUpperCase().startsWith(filter)) {
      card.style.display = ''
    } else {
      card.style.display = 'none'
    }
  }
}

function toggleClearButton() {
  const input = document.getElementById(
    'search-input',
  ) as HTMLInputElement | null
  const clearButton = document.getElementById(
    'clear-button',
  ) as HTMLElement | null

  if (input && clearButton) {
    if (input.value.length > 0) {
      clearButton.style.display = ''
      clearButton.classList.remove('clear-button-hidden')
    } else {
      clearButton.style.display = 'none'
      clearButton.classList.add('clear-button-hidden')
    }
  }
}

function clearInput() {
  const input = document.getElementById(
    'search-input',
  ) as HTMLInputElement | null

  if (input) {
    input.value = ''
    filterCards()
    toggleClearButton()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input')
  const clearButton = document.getElementById('clear-button')

  if (searchInput) {
    searchInput.addEventListener('input', toggleClearButton)
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        filterCards()
      }
    })
  }

  const searchButton = document.getElementById('search-button')

  if (searchButton) {
    searchButton.addEventListener('click', filterCards)
  }

  if (clearButton) {
    clearButton.addEventListener('click', clearInput)
  }
})
