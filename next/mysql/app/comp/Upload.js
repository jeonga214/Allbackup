"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Upload() {
    const [imageView,setImageView] = useState();
    const [data,setData] = useState([]);
    const [testBlob,setTestBlob] = useState();

    const uploadFile = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const obj = Object.fromEntries(formdata);

        const fr = new FileReader();
        fr.readAsDataURL(obj.upload);
        fr.addEventListener('load',()=>{
            axios.post('/api/upload/files',{
                title:obj.title,
                imgUrl:fr.result
            })

        })
    }

    const getFile = async() => {
        const d = await axios.get('/api/upload/files');
        const setD = d.data.map(obj=>{
            obj.imgUrl = base64Blob(obj.imgUrl);
            return obj;
        })
        setData(setD);
    }


// bas64를 blob으로 변환해주는 함수
function base64Blob(b64Data,contentType='') {
    const image_data = atob(b64Data.split(',')[1]); // data:image/gif;base64 필요없으니 떼주고, base64 인코딩을 풀어준다
 
    const arraybuffer = new ArrayBuffer(image_data.length);
    const view = new Uint8Array(arraybuffer);
 
    for (let i = 0; i < image_data.length; i++) {
       view[i] = image_data.charCodeAt(i) & 0xff;
       // charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
       // 비트연산자 & 와 0xff(255) 값은 숫자를 양수로 표현하기 위한 설정
    }
 
    const blob = new Blob([arraybuffer], {type: contentType});
    return URL.createObjectURL(blob); // object url 생성

 }
 //링크사이즈줄이기?
 //https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Base64-Blob-ArrayBuffer-File-%EB%8B%A4%EB%A3%A8%EA%B8%B0-%EC%A0%95%EB%A7%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85


    useEffect(()=>{
        getFile();
    },[])

  return (
    <div>
        <h2>파일업로드</h2>
        <form 
            onSubmit={uploadFile}
            method='post'
            encType='multipart/form-data'
        >
            <p><input type='text' name='title'/></p>
            <p><input 
                type='file' name='upload' 
                onChange={(e)=>{const file = e.target.files[0]; 
                file && setImageView( URL.createObjectURL(file) )
                }}
            />
            <img src={imageView} width='100'/></p>
            <p><input type='submit' value='저장'/></p>
        </form>

        <img src={testBlob}/>

        <div>
            {
                data.map(obj=>(
                    <figure key={obj.num}>
                        <img src={obj.imgUrl} alt='' width='200'/>
                        <figcaption>{obj.title}</figcaption>
                    </figure>
                ))
            }
        </div>
    </div>
  )
}

export default Upload