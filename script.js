let number= 0 

document.getElementById('calculate').addEventListener('click',multiplication)


function multiplication () {
number= document.getElementById('input').value

number= parseInt(number)

number= number * number 


alert(number)
}