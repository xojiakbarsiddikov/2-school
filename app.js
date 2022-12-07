var workExperience = document.querySelector(".experience")
var completeProjects = document.querySelector(".completeproject")
var happyClient = document.querySelector(".happyclient")

var countOne = 0
var countTwo = 0
var countThree = 0

let set = setTimeout(() => {
    function counterUp(){
        workExperience.innerHTML = '+' + ' ' + countOne
        countOne++
        if(countOne > workExperience.dataset.textone){

            clearInterval(stop)
        }
    }
    var stop = setInterval(function(){
        counterUp()
    },0)



    function counterUpTwo(){
        completeProjects.innerHTML = '+' + ' ' + countTwo
        countTwo++
        if(countTwo > completeProjects.dataset.texttwo){
            clearInterval(thamo)
        }

    }
    var thamo = setInterval(function(){
        counterUpTwo()
    },0)


    function counterUpThree(){
        happyClient.innerHTML = '+' + ' ' + countThree
        countThree++
        if(countThree > happyClient.dataset.textthree){
            clearInterval(tham)
        }

    }
    var tham = setInterval(function(){
        counterUpThree()
    },0)
}, 200)
