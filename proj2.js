const form=document.querySelector("form")
// console.log(form)

form.addEventListener("submit",function(x){
    x.preventDefault()

    const height=document.querySelector("#height").value
    // console.log(height)
    const weight=document.querySelector("#weight").value

    const results=document.querySelector(".result")
    // console.log(results)

    if(height==="" || height<0 || isNaN(height))
    {
        results.textContent="pls give valid height"
    }
    else if(weight==="" || weight<0 || isNaN(weight))
    {
        results.textContent="pls give valid weight"
    }
    else{
        const bmi=(weight/(height*height/10000)).toFixed(2)
        // results.textContent=`${bmi}`
        if(`${bmi}`<18.6)
        {
            results.textContent=`${bmi} (under weight)`
        }
        else if(`${bmi}`>=18.6 && `${bmi}`<=24.9)
        {
            results.textContent=`${bmi} (normal range)`
        }

         else if(`${bmi}`>24.9)
        {
            results.textContent=`${bmi} (over weight)`
        }
    }



    


    

})