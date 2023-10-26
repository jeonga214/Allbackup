const txt = {
    init : {scale:2, x:1000, opacity:0},
    play : {
        scale:1, x:0, opacity:1,
        transition:{duration:1, ease:'circOut'},
    },
  } 
const txt2 = {
init : {scale:5, rotate:360},
play : {scale:1, rotate:0}
} 

// export default txt;- 한개인 경우
// export {txt,txt2}; -여러개인 경우

// export const txt2 = {
//     init : {scale:5, rotate:360},
//     play : {scale:1, rotate:0}
//     }
 
export {txt,txt2};

