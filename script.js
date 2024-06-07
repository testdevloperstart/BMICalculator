// const { daLocale } = require("ngx-bootstrap/chronos")

const form=document.querySelector('form')
console.log(form)
console.log("hello")

const submit = document.querySelector('.submit')
console.log(submit)


form.addEventListener('submit', function(event){
    console.log(event)
    // here we are preventing the default behaver pf the submit
    event.preventDefault()

    // here we are fetching the values of the input given by user
    const weight = parseInt(document.querySelector('.weight-input').value)
    console.log(weight)
    const height = parseInt(document.querySelector('.height-input').value)
    console.log(height)
    const result = document.querySelector('.result')

    if(weight===" "|| weight<0 ||isNaN(weight)){
        result.innerHTML = "please enter currect weight "
    }else if(height===" " || height<0 || isNaN(height)){
        result.innerHTML = "please enter currect height"
    }else{
        // let curheight = height*0.01;
        let currentheight = height/100;
        let squearheight = currentheight*currentheight;
        const bmi  = weight/squearheight;
        let BMI = bmi.toFixed(2)
        result.innerHTML= ` your BMI is: ${BMI}`
    }
    
},false)