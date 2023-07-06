// [{
//     'usernamd' : 'omar elbarbeir',
//     'number' : 10,
//     'skills' : 'html,css',
//     'phone' : '01066125735',
//     'address' : 'egypt , damietta'
// }]


// fetch('https://catfact.ninja/fact')
//     .then((result)=>{
//         let data = result.json();
//         return data
//     }).then((data)=>{
//         data.length = 10;
//         return data
//     }).then((data)=>{
//         console.log(data.fact)
//     })

let btn = document.querySelector('.btn')

btn.onclick = function(){
    fetch('https://catfact.ninja/fact')
    .then((result)=>{
        let data = result.json();
        return data
    }).then((data)=>{
        data.length = 100;
        return data
    }).then((data)=>{
       let cat = document.querySelector('.cat');
       cat.innerHTML = JSON.stringify(data.fact) ;
    })

}



























