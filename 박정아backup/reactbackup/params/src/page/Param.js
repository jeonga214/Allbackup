import { useParams } from 'react-router-dom';

function Param({data}){
    const {code} = useParams();

    let detail = data.filter(obj => obj.id === code);

    return(
        <>
            <img src={detail[0].thumb}></img>
            <div>{detail[0].name}</div>
            <div>{detail[0].price}</div>
        </>

    )
}

export default Param