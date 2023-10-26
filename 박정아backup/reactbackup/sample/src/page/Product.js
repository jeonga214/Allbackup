import Item from './Item';

function Product({data}){

    return (
      <>
      <div className="home">React State & Props</div>
      <div className="flex">
        <div className="left">
            <div className="box"></div>
            <p>adidas stan smith</p>
            <p>$160</p>
        </div>

        <div className="right">
            <div className="box"></div>
            <p>adidas stan smith</p>
            <p>$160</p>
        </div>
      </div>

      <div className="home">Product</div>
      <div>
        {
          // data.map(function(){
          //   return 0;
          // })
          
          data.map((item,k)=>(
            <Item key={item.id} item={item}/>
          ))
        }
        
      </div>
         
      </>
    )
  }
  
  export default Product