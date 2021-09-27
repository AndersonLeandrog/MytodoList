function addNota(){
  //Adiciona e estiliza os elementos LI
  const li = document.createElement('LI')
  const inputValue = document.querySelector('input').value
  const textLI = document.createTextNode(inputValue)
  li.appendChild(textLI)

  li.setAttribute
  (
    'style', `
    display: flex; 
    justify-content: space-between; 
    align-items: center;`
  )

  //Adiciona e estiliza os elementos SPAN
  const close = document.createElement('SPAN')
  const textClose = document.createTextNode('\u2716')
  close.appendChild(textClose)

  close.setAttribute
  (
    'style', `
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    margin-right: 2px;
    background: crimson;
    
    color: white;

    display: flex; 
    justify-content: center; 
    align-items: center;`
  )

  //Adiciona e estiliza os elementos SPAN
  const mark = document.createElement('SPAN')
  const textMark = document.createTextNode('•••')
  mark.appendChild(textMark)

  mark.setAttribute
  (
    'style', `
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    margin-right: 2px;
    background: silver;
    
    color: white;

    display: flex; 
    justify-content: center; 
    align-items: center;`
  )

  li.appendChild(mark)

  //Quando mark for clicado, exbirá um botão que logo será substituido pelo de fechar
  mark.addEventListener('click', (e) => {
    if(e.target != '') {
      e.target.innerHTML='\u2713'
      e.target.style.background='limegreen'

      setInterval(() => {
        mark.style.display='none'
        e.target.parentNode.appendChild(close)
      }, 1500)

      close.addEventListener('click', (e) => {
        e.target.parentNode.remove()
      })
    }
  })

  
  //Verifica o valor entrado pelo usuário e valida conforme a condição
  const $list = document.querySelectorAll('LI') 
  
  if(inputValue == '') {
    document.querySelector('input').style.border='1px solid red'
  } else if($list.length <= 10){
    document.getElementById('lista').appendChild(li) 
    document.querySelector('input').style.border='0'
  } else{
    alert
    (
      `O aplicativo fornece o suporte a criação de 10 notas, se você está vendo essa mensagem é porque você excedeu o limite! Para adicionar mais notas você terá que sacrificar alguma que já esteja na lista :O`
    )
  }
}

function select(){
  document.querySelector('input').select()
}
// !Idéia, criar notas programáveis, o usuário digita uma nota e seta um determinado tempo,
// aquela nota durará até aquele determinado tempo e quando o tempo acabar ela será removida automaticamente da App!
