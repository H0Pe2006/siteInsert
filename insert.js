const frm = document.querySelector("form")
const  = document.querySelector("h3")

const nRomanos = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }

let nUsados = 0
let rep = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    nUsados = 0;
    rep = 0;
    const nRomano = frm.inNumeroRom.value;
    calcNum(nRomano.toUpperCase())
})

function comparNum(num1, num2, ult) {
    let a = nRomanos[num1]
    let b = nRomanos[num2]
    console.log(a, b, ult)
    if (a < b) {
        rep = 0
        nUsados += 2
        return b - a
    } else if (a > b) {
        rep = 0
        nUsados++
        return a
    } else {
        if (ult == num1) {
            rep += 2 
            nUsados += 2
            return 2 * b
        } else {
            rep++
            nUsados++
            return b
        }
    }
}

function calcNum(nRomano) {
    let nDecimal = 0 
    let ult = [""] 
    let i = 0

    while (i < nRomano.length - 1) {
        let x = nRomano[i]
        let y = nRomano[i + 1]
        nDecimal += comparNum(x, y, ult[0])
        if (nUsados == 2) {
            ult[0] = x
            i += 2
        }
        else if (rep == 3) {
            ult[0] = ""
            i += 2
        } else {
            ult[0] = x
            i += 2
        }


    }

    if (nUsados != nRomano.length) {
        nDecimal += nRomanos[nRomano[nRomano.length - 1]]
    }

    converter.innerText = "O número " + nRomano + " em decimal é: " + nDecimal
};