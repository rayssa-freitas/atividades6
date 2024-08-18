import { useEffect, useState } from 'react'
import Products from '../components/Products.jsx'

function Bicicletas() {
  const bicicletasOriginal  = [
   {
     id: 0, nomeModelo: 'Magic Might', preco: 2499, categoria: 'A',
     imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg',
   },
   {
     id: 1, nomeModelo: 'Nimbus Stark', preco: 4999, categoria: 'B',
     imgSrc: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg",
   },
   {
     id: 2, nomeModelo: 'Nebula Cosmic', preco: 3999, categoria: 'C',
     imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg',
   }
 ]


   const [bicicletas, setBicicletas] = useState(bicicletasOriginal)
   const [filtro, setFiltro] = useState('T')  //para todas as opções 


   function mudarCategoria(categoria) { //chama setFiltro para mudar categoria
    setFiltro(categoria)
}

   useEffect(() => {  //executará se houver alteração do filtro
    if (filtro === 'T') { //se a pesquisa do filtro for igual T renderiza todas as bike
     setBicicletas(bicicletasOriginal)
    } else {  //array a partir do clique do botao e verifica se corresponde ao valor de bike.categoria, ou seja = filtro -> se for verdadeiro, mostra a bicicleta
     const bicicletasFiltradas = bicicletasOriginal.filter(bike => bike.categoria === filtro)
    setBicicletas(bicicletasFiltradas)
    }         
   }, [filtro]) //se variavel filtro for alterada de T para A -> selecionara item que esta sendo buscado através do filter e pesquisará através de bike categoria
    

   //função é chamada quando componente executar algo -> declaro função em componente pai -, envio para componente filho
   function comprarBike() {
   console.log('comprando a bicicleta')
  }
   
  const estaAutenticado = true

   function componenteBemVindo() { //função para retornar componente
     if(!estaAutenticado) {
      return <span>Olá, Visitante</span>
     }else {
      return <span>Olá, nomeUsuário</span>
     }
   }
   return (
     <>
        {componenteBemVindo()} {/*chama função pra retornar*/}

        <h1>Bicicletas</h1>   {/*chama filtro do useState -> para pesquisa e tratamento */}
        <span>Categoria Aplicada: {filtro}</span> 
         <div>                   {/*cada botao chama categoria*/}
            <button onClick={() => mudarCategoria('A')}>Categoria A</button> 
            <button onClick={() => mudarCategoria('B')}>Categoria B</button>
            <button onClick={() => mudarCategoria('C')}>Categoria C</button>
            <button onClick={() => mudarCategoria('T')}>Mostrar Todas</button>
        </div>
     
     <div className='list'>
       {bicicletas.map(bike =>
          <Products
          key={bike.id}
          modelo={bike.nomeModelo}
          preco={bike.preco}
          imagemSrc={bike.imgSrc}
          comprarBike={comprarBike}
          />
         )}
     </div>
     

     </>
    )
}

export default Bicicletas 