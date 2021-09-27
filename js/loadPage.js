window.addEventListener('load', () => {

    // Exibe um aviso ao abrir a página
    const icon = document.createElement('IMG')
    icon.setAttribute('style', 'width: 42px;')
    icon.setAttribute('src', 'img/note.png')
    icon.setAttribute('alt', 'bloco-de-notas')


    const p = document.createElement('P')
    const text = document.createTextNode
    (
        `Seja bem-vindo ao aplicativo MyTodoList, crie suas listas, complete suas tarefas
        e se organize! quando organizamos as nossas tarefas economizamos tempo para outras!
        
        E não se esqueça, se curtir o projeto dê um apoio a quem se esforçou para fazê-lo!
        você pode acessar a minha página no github e deixar o seu feedback! Acesse o meu
        github: github.com/andersonleandrog!`
    )
    p.appendChild(text)

    p.setAttribute('style', 'text-align: justify; padding: 25px;')

    const button = document.createElement('BUTTON')
    const textBTN = document.createTextNode('OK')
    button.appendChild(textBTN)

    const div = document.createElement('DIV')

    div.setAttribute
    (
        'style', `
        position: absolute;
        width: 625px;
        height: 280px;
        border-radius: 7px;
        border: 1px solid silver;
        background: white;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        `
    )

    div.appendChild(icon)
    div.appendChild(p)
    div.appendChild(button)
    
    document.body.appendChild(div)

    button.addEventListener('click', () => {
        div.style.display='none'
    })

    // Limita a quantidade de caracteres suportados para cada nota criada.
    const input = document.querySelector('input')
    const h1 = document.querySelector('h1')

    input.addEventListener('keypress', () => {
      if(input.value.length == 48) {
        input.style.border='1px solid crimson'
        alert('Limite de caracteres excedidos!')
      } else {

        // Valor atual = numero de caracteres inseridos na input text
        // limite =  máximo de caracteres que poderão ser inseridos dentro da input

        let valorInserido = input.value.length
        const limiteDeCaracteres = 48
        
        if(valorInserido < limiteDeCaracteres){
          h1.innerHTML=`MyTodoList(${limiteDeCaracteres-1})` //decrementa limite em 1
          input.style.border='1px solid limegreen'
        } else {
          input.style.border='1px solid crimson'
        }
      }
    })
})
    
