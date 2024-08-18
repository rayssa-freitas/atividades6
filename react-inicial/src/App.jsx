import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import { useEffect, useState } from 'react'                 

function App() { 
//  const bicicletas  = [
//   {
//     id: 0, nomeModelo: 'Magic Might', preco: 2499,
//     imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg',
//   },
//   {
//     id: l, nomeModelo: 'Nimbus Stark', preco: 4999,
//     imgSrc: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg",
//   },
//   {
//     id: 2, nomeModelo: 'Nebula Cosmic', preco: 3999,
//     imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg',
//   }
// ]

    const [text, setText] = useState("Olá") //pode ser string vazia 
    // const [bicicletas, setBicicletas] = useState([]) 


    useEffect(() => {
      if(text != '') { //se estiver vazio....
        console.log("texto nao alterado")
      } else {
        console.log("alteração ocorreu")
      }
    }, [text])
 
 
    useEffect(() => {
        console.log("alteração ocorreu")
    }, [text])

    useEffect(() => {
      console.log("componente foi iniciado e/ou construído")
     }, [])


    useEffect(() => {
      console.log("alguma mudança está ocorrendo")  //aceita qualquer mudança para executar algo
    })




    function nomeAlterado() { //atualizo a variável independente do tipo que seja
      setText('Bom dia')
      console.log("buscando", text) //pega dado pesquisado pelo usuario
    }
  return ( 
    <> 
    <span>{text}</span>
    <input type="text" placeholder='Digite aqui' 
    value={text}
    onChange={(event) => setText(event.target.value)} />
    {/*variavel dentro de value no INPUT + onChange modificando método do useState*/}

    <button onClick={() => nomeAlterado()}>Alterar</button>


      {/* <Header></Header>
          {/* /*react cobra que elementos do array que se repetem tenha uma identificação - key */ }
      
      {/* {bicicletas.map(bike => 
        // console.log(bike)
        <Products key={bike.id} modelo={bike.nomeModelo} preco={bike.preco} imagemSrc={bike.imgSrc}/>
      )} */}
      {/* <Products modelo="Magic Might" preco='2499' imagemSrc="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg"></Products>
      <Products modelo="Ocean" preco='4499'></Products>
      <Products modelo="Nebulosa" preco='3499'></Products> */} 

      <Footer></Footer> 
    </>
  )
}

export default App
