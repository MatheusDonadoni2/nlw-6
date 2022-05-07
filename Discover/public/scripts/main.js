import Modal from './modal.js'
const modal = Modal()


// OPEN AND CLOSE MODAL ROOM
const checkButtons = document.querySelectorAll("a.check")
checkButtons.forEach(button => {
  button.addEventListener("click", handleClick)
})

const deleteButtons = document.querySelectorAll(".actions a.delete")
deleteButtons.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
  const modalTitle = document.querySelector('.modal h2')
  const modalDescription = document.querySelector('.modal p')
  const modalButton = document.querySelector('.modal button')
  const form = document.querySelector(".modal form")
  const slug = check ? "check" : "delete"
  const questionId = event.target.dataset.id

  const roomId = document.querySelector("#room-id").dataset.id
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

  event.preventDefault()

  modalTitle.innerHTML = check ? "Marcar como lida esta pergunta" : "Excluir esta pergunta"
  modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como <b>LIDA</b> esta pergunta ?" : "Tem certeza que deseja <b>EXCLUIR</b> esta pergunta ? "
  modalButton.innerHTML = check ? "Sim, marcar como lida esta pergunta" : "Sim, excluir esta pergunta"
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
  modal.open()
}
// **********************************************************************