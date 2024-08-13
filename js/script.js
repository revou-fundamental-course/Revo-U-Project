const radio = document.getElementsByName("jk");
const berat = document.getElementById("berat-badan");

function validate(){
    let check_radio = false
    for(let i = 0;i<radio.length;i++){
        if(radio[i].checked === true){
            check_radio = true
            break;
        }
    }
    let check_berat = false;
    for(let i = 0;i<berat.value.length;i++){
        
    }
}