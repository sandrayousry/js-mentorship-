var months = [31,28,31,30,31,30,31,31,30,31,30,31];
function ageCalculate(){
    var today = new Date();
    var inputData = new Date(document.getElementById("input-date").value);

    // to extract user-input date
    var inputDetails = {
        year:inputData.getFullYear(),
        month:inputData.getMonth()+1,
        day:inputData.getDate()
        
    }

    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth()+1;
    var currentDay = today.getDate();

    leapYearChacker(currentYear);

    if(
        inputDetails.year > currentYear ||

       ( 
        inputDetails.year > currentYear&&
        inputDetails.month > currentMonth)||

        (
          inputDetails.year > currentYear &&
          inputDetails.month > currentMonth &&
          inputDetails.day > currentDay) 
    )

          {
              alert("Not Born Yet");
              displayResult("-","-","-")
              return;
                 
        }
        var birthYear , birthMonth , birthDay

         birthYear = currentYear - inputDetails.year;
        if (currentMonth >= inputDetails.month){
            birthMonth = currentMonth - inputDetails.month;
        }
        else{
            birthYear--;
            birthMonth = 12 + currentMonth - inputDetails.month;
        }
        if(currentDay >= inputDetails.day){
            birthDay = currentDay - inputDetails.day;
        }
        else{
            birthMonth --;
            var days = months[currentMonth - 2];
            birthDay = days + currentDay - inputDetails.day;
            if(birthMonth < 0){
                birthMonth = 11;
                birthYear--;
            }
        }
// console.log(birthYear,birthMonth,birthDay)
   displayResult(birthYear,birthMonth,birthDay)

    }  

function leapYearChacker(year){
    if(year % 4 ==0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] =29;
    }
    else{
        months[1] =28;
    }
}

function displayResult(byear,bmonth,bday){
    document.getElementById("years").textContent = byear;
    document.getElementById("months").textContent = bmonth;
    document.getElementById("days").textContent = bday;
}


