function changeColor() {

    let num1 = Math.floor(Math.random()*300)
    let num2 = Math.floor(Math.random()*300)
    let num3 = Math.floor(Math.random()*300)
    let color = `rgb(${num1} ,${num2} ,${num3})`
    document.body.style.backgroundColor = color;
    document.querySelector('p').innerHTML = color;
}
