import Item_b from './Item_b';

function Product_b({data}){

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

      <div className="home">Product_b</div>
      <div>
        {
          // data.map(function(){
          //   return 0;
          // })
          
          data.map((item,k)=>(
            <Item_b key={item.id} item={item}/>
          ))
        }
        
      </div>
         
      </>
    )
  }
  
  export default Product_b