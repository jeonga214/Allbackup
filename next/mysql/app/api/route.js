
import { queryExecute } from "./db";

//connection.end();


export async function GET() {

    const data = await queryExecute('SELECT * from member');

    //추가
    // const data = await queryExecute(`insert into member (id,name,email) values ('abc','홍길순','hong@gmail.com')`);
    
    //수정
    // const data = await queryExecute(`update member set name='홍길순' where num = 6`);

    //삭제
    //const data = await queryExecute(`delete from member`);


    //table만들기
    // const data = await queryExecute(`
    //     create table contact(
    //         name varchar(30),
    //         email varchar(100),
    //         contents text,
    //         num int not null auto_increment,
    //         primary key(num)
    //     )
    // `);

    //table삭제
    //const data = await queryExecute(`drop table contact`);

    return Response.json(data);
}

export async function POST(req) {
    const {name,email,id} = await req.json();

    const data = await queryExecute(`insert into member (id,name,email) values (?,?,?)`,[id,name,email]);

    return Response.json([]);
    
}


//https://dev.mysql.com/downloads/file/?id=519997
//https://www.npmjs.com/package/mysql
//https://app.cloudtype.io/@qdg020214/server