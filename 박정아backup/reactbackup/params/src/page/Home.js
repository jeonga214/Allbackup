import Item from './Item';

function Home({data}){
 
    return (
      <>
        <div>리스트(상세보기)</div>

        <div>
            {
                data.map((item,k)=>(
                    
                    <Item key={item.id} item={item}/>
                ))
            }
        </div>
         
      </>
    )
  }
  
  export default Home