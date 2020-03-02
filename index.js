

document.addEventListener("DOMContentLoaded", (e) => {

    // intro()
    looper()
    former()
    triangleArea()
    cToF()
    difference()
})

const intro = () => {
    const main = document.querySelector(".main")
    
    alert("Welcome User!")
    
    const person = prompt("Please enter your name");

    if (person != null) {
        main.innerHTML = `<h3>Welcome ${person}</h3>`
    }

    const soccer = confirm("Do you like Soccer?");

    main.insertAdjacentHTML('beforeend', `
        <h2>
            ${person} ${soccer ? "does": "does not"}
        </h2>
        `)
    console.log(`${person} ${soccer ? "does": "does not"}`)
}


function looper(){
    const loop = document.querySelector(".loop")


    for (let i = 0; i < 15; i++) {
        loop.insertAdjacentHTML('beforeend', `
            <h2>
                ${i} ${i % 2 == 0 ? "even": "odd"}
            </h2>
        `)
        
    }
}

function former() {
    const form = document.querySelector("#year-form")

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const yearFormOutput = document.querySelector("#year-form-output")

        let myBirthYear = document.querySelector("#year").value
        myBirthYear = parseInt(myBirthYear)
        let futureYear = document.querySelector("#futureYear").value
        futureYear = parseInt(futureYear)

        
        
        function calcuateYear(bYear, fYear) {

            yearFormOutput.innerHTML = `
                <h3>In ${fYear} you will be ${fYear - bYear - 1 } or ${fYear - bYear}  </h3>
            `
        }

        calcuateYear(myBirthYear, futureYear )

    })
}


function triangleArea(){
    const triForm = document.querySelector("#tri-form")

    triForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const triFormOutput = document.querySelector("#tri-form-output")

        let a = document.querySelector("#side-one").value
        let b = document.querySelector("#side-two").value
        let c = document.querySelector("#side-three").value

        a = parseInt(a)
        b = parseInt(b)
        c = parseInt(c)

        
        
        function calcuateTri(a, b, c) {

            // "s" (half of the triangles perimeter)
            let s = (a+b+c)/2

            // Area
            let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))

            triFormOutput.innerHTML = `
                <h3>The are of a triangle where sides are ${a}, ${b}, ${c} is ${area}</h3>
            `
        }

        calcuateTri(a, b, c)

    })
}

function cToF(){
    const cToFform = document.querySelector("#c-to-f-form")

    cToFform.addEventListener('submit', (e) => {
        e.preventDefault();

        const cToFformOutput = document.querySelector("#c-to-f-form-output")
        
        let temp = document.querySelector("#temp").value
        let CorF = document.querySelector("#CorF").value
        temp = parseInt(temp)
    
        function calcuateCtoF(temp, CorF) {
            let answer
            let symbol = ''
            
            if(CorF === "celsius"){
                answer = (temp * (9/5)) + 32 
                symbol = "F" 

                console.log(answer)
            } else if(CorF === "fahrenheit"){
                answer = (temp -32) * 5/9
                symbol = "C"
            }
            console.log(answer)

            cToFformOutput.innerHTML = `
                <h3>The temperature is ${answer}${symbol}</h3>
            `
        }

        calcuateCtoF(temp, CorF)

    })
}

function difference(){
    const differenceform = document.querySelector("#difference-form")

    differenceform.addEventListener('submit', (e) => {
        e.preventDefault();

        const differenceformOutput = document.querySelector("#difference-form-output")
        
        let differenceValue = document.querySelector("#difference").value
        differenceValue = parseInt(differenceValue)
    
        function calcuatedifference(differenceValue) {
            let answer1
            const difference =  Math.abs(differenceValue - 13)
            console.log(difference)
            
            if(differenceValue > 13){
                answer1 = difference * 2
            } else {
                answer1 = difference
            }

            differenceformOutput.innerHTML = `
                <h3>The difference is ${answer1}</h3>
            `
        }

        calcuatedifference(differenceValue)

    })
}



