// Kalkulator BMI:
let button = document.getElementById('btn');

button.addEventListener('click',() => {
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false, age_status=false;

    if(age === '' || isNaN(age) || (age <=0)){
        document.getElementById('age_error').innerHTML = 'Please provide a valid age';
    }else{
        document.getElementById('age_error').innerHTML = '';
        age_status=true;
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi <18.5){
            result.innerHTML = 'Under weight : ' + bmi; 
        }else if(bmi >= 18.5 && bmi < 25.0){
            result.innerHTML = 'Normal : ' + bmi;
        }else if(bmi >= 25.0 && bmi < 30.0){
            result.innerHTML = 'Over weught : ' + bmi;
        }else{
            result.innerHTML = 'Obesity : ' + bmi;
        }
    }else{ 
        alert('The form has error');
        result.innerHTML = '';
    }
});
// Waktu sekarang:
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
document.getElementById("time").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];