

// operators [&&, ||, ??, ?.q2 ]
//&& and
const cond = (1 < 2) && (5 > 7)
console.log("cond => ", cond)

const getSum = (a, b) => {
    const result = a && b && (a + b)
    return result 
}

console.log(getSum(2, 5
    
    
    ))

    // Or
     
    const orCond = (3 > 2) ||  (3 > 5) 
    console.log("Or Cond => ", orCond)


    const orGetSum = (tax, principle) => {
        const mainTax = tax || 5
        const result = principle * mainTax
        return result
    }


    console.log(orGetSum(0, 10))


    //nullish coalescing ??

    const res = null ?? 50
    console.log("res =>", res)

    // Not

    const btn = document.querySelector('button')

    const text = document.querySelector('h1')

    let state = false

    console.log(text)

    // (cond) ? "true" : "false"
    // tenary operator ?
    btn.addEventListener('click', () => {
        state = !state

       // text.textContent = (state + "")
       text.textContent = state ? "true" : "false"
    })

    // destructuring && spread [...]

    const obj = {
        name:"jace",
        age:18,
       
    }
//. = property accessor

    console.log(obj.age)

 

    console.log(obj['name'])

    const { age, name } = obj

const human = {
    ...obj,
    name:"jane",
movement: true
}
console.table(human)

    const subject = {
        duration: "3months",
        course:"react",
        price:500,
    }


    const { duration, course, price} = subject

    console.log(duration)


    // array

    const products = ["phone" , "mac", "windows"]
   // console.log(products[2])

   const [first, second, third] = products

console.table ( {
    first,
    second,
    third
})

const anotherArr = ["samsung", "infinix"]

const newArr = [...anotherArr, ...products,]
console.table(newArr)




// chain rule
// fetch("http://127.0.0.1:5500/test/data.json"
//, {
 //   method: "Get",
//})

// fetch("http://127.0.0.1:5500/test/data.json")
// .then(res => res.json())
// .then(data => console.table(data))
// .catch(err => console.log(err))
// // .then(res => {
    // return res.json()
// .then(res => console.log(res))



// async / await

const getData = async () => {
    const request = await fetch("http://127.0.0.1:5500/test/data.json")
    const response = await request.json()

    console.table(response)
}
getData()
.catch(err => console.log(err))