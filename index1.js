
const api = `http://data.fixer.io/api/latest?access_key=${apiKey}`

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.value = currency;
    option1.text = currency;
    option2.value = currency;
    option2.text = currency;
    fromDropDown.add(option1)
    toDropDown.add(option2)
});

// /settinf default value 
fromDropDown.value = "USD";
toDropDown.value = "INR";
        
let convertCurrency = async () =>{
    let amount = document.querySelector("#amount").value;
    let fromCurrency = await fromDropDown.value;
    let toCurrency = await toDropDown.value;

    if(amount.length != 0){
        fetch(api)
          .then((res) => res.json())
          .then((data) => {
            let fromExchangeRate = data.rates[fromCurrency];
            let toExchangeRate = data.rates[toCurrency];
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;

            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)}  ${toCurrency}`
          })
    }
    else{
        alert("please fill in the amount");
    }
}

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);























///////////////////////////////////////////////////////////////////////////  
//       differennt ways to fetch API


    // let fetchRes = fetch(api)
    // fetchRes.then(res => res.json()).then(data =>{
    //     console.log(data);
    //     for (const key in data.rates){
    //         console.log(`${key} : ${data.rates[key]}`)
    //     }
    // })
    
    
   
    
    // const data = res.json();
    // for (const key in data.rates){
    //     console.log(`${key} : ${data.rates[key]}`)
    // }


    // async function fetchAPI() {
    //     const response = await fetch(api)
    //     const data = await response.json();

    //     console.log("mil gaya");
    //     console.log(data)

    //     for (const key in data.rates){
    //         console.log(`${key} : ${data.rates[key]}`)
    //     }
        
    // }

    // fetchAPI()


////////////////////////////////////////////////////////////////////other ways 

    //  fetch(api)
//     .then(res => res.json())
//     .then(data => {console.log(data)
//         for (const key in data.rates){
//             console.log(`${key} : ${data.rates[key]}`)
//         }
//     });
// let fetchRes = fetch(api)
// fetchRes.then(res => res.json())
//         .then(data => {console.log(data)
//             for (const key in data.rates){
//                 // console.log(`${key} : ${data.rates[key]}`)
//                 const option1 = document.createElement("option");
//                 const option2 = document.createElement("option");
//                 option1.value = `${key}`;
//                 option1.text = `${key}`;
//                 option2.value = `${key}`;  
//                 option2.text = `${key}`;
//                 fromDropDown.add(option1);
//                 toDropDown.add(option2);

//                 //setting default value 
//                 fromDropDown.value = "USD";
//                 toDropDown.value = "INR";
                
//             }
//         });