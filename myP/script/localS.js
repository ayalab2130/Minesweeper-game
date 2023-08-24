
let users = [];
let numUsers = 0;
let data;



function isExists(user) {

    if (localStorage.getItem('details') != null) {
        data = localStorage.getItem('details');
        users = JSON.parse(data);
        for (let i = 0; i < users.length; i++) {
            if (users[i].name == user.name && users[i].pas == user.pas)
                return true;
        }
    }
    return false;

}


const nameUser = document.querySelector('#nameUser');
const pasUser = document.querySelector('#pasUser');
const enterOfPlay = document.querySelector('#enterOfPlay');
const newUser = document.querySelector('#newU');
newUser.addEventListener("click", add1);

function addUser(user) {
    users[numUsers] = {};
    users[numUsers].name = user.name;
    users[numUsers].pas = user.pas;

    data = JSON.stringify(users);
    localStorage.setItem('details', data);
}

enterOfPlay.addEventListener("click", enterOfPlay1);

function add1() {

         if (nameUser.value != "" && pasUser.value != "") {
        let user = {};
             user.name = nameUser.value;
             user.pas = pasUser.value;
        if (isExists(user)) {
            alert('המשתמש  זה כבר קיים');
            nameUser.value = "";
            pasUser.value = "";
        }
        else {
            addUser(user);
            numUsers++;
            alert('משתמש הוגדר בהצלחה!');
            nameUser.value = "";
            pasUser.value = "";
            window.open('page1.html');
        }

    }
    else {
        alert('אחד מהפרטים שהקשת שגוי אנא נסה שנית');
             nameUser.value = "";
             pasUser.value = "";
    }



};





function enterOfPlay1() {
    let user = {};
    user.name = nameUser.value;
    user.pas = pasUser.value;
    if (nameUser.value != "" && pasUser.value != "") {
        
        if (isExists(user)) 
            
            window.open('page1.html');
        
    
        else {
           
          if(  confirm('משתמש זה אינו קיים ,האם ברצונך לשמור משתמש זה?'))
     
            {
                addUser(user);
                numUsers++;
              alert('משתמש הוגדר בהצלחה!');
                window.open('page1.html');

            }

            nameUser.value = "";
            pasUser.value = "";
        }
    }
    else {
        alert('אחד מהפרטים שהקשת שגוי אנא נסה שנית');
        nameUser.value = "";
        pasUser.value = "";}

};




