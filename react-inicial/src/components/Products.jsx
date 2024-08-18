import './Products.css'

function Products({modelo, preco, imagemSrc, comprarBike}) { //propriedades recebidas pelo meu modelo
 
 return (
  <>
   <div className='products'>
      <img src={imagemSrc} alt="imagem de bike"></img>
      <h3 className='modelo'>{modelo}</h3>
      <span className="preco">R$ {preco}</span>        {/*adicionando evento de tecla digitada*/}
      <input type="text" placeholder='Digite aqui' onChange={(evento) => teclaPressionada}></input>
      {/* <button onClick={() => comprarBike()}>Comprar</button> arrow function comprar bicicleta */}
      <button onClick={() => comprarBike()}>Comprar</button>
    </div>   {/*chamo no componente filho -> componente pai -> posso enviar informações como chave e modelo que estão sendo comprados*/}
 </>
 )  
}

export default Products

 



 