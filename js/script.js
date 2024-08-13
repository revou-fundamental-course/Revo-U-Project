const radio = document.getElementsByName("jk");
const berat = document.getElementById("berat-badan");
const umur = document.getElementById("umur");
const tinggi = document.getElementById("tinggi-badan");

function validate(){
    let check_radio = false
    for(let i = 0;i<radio.length;i++){
        if(radio[i].checked === true){
            check_radio = true
            break;
        }
    }
    let check_berat = false;
    let a = 0;
    for(let i = 0;i<berat.value.length;i++){
        if(berat.value[i]==='0' || berat.value[i]==='1' || berat.value[i]==='2' || berat.value[i]==='3' || berat.value[i]==='4' || berat.value[i]==='5' || berat.value[i]==='6' || berat.value[i]==='7' || berat.value[i]==='8' || berat.value[i]==='9' || berat.value[i] === '.' ){
            a++;
        }
    }
    if(a===berat.value.length && a!==0){
        check_berat = true;
    }

    let check_umur = false;
    let b = 0;
    for(let i = 0;i<umur.value.length;i++){
        if(umur.value[i]==='0' || umur.value[i]==='1' || umur.value[i]==='2' || umur.value[i]==='3' || umur.value[i]==='4' || umur.value[i]==='5' || umur.value[i]==='6' || umur.value[i]==='7' || umur.value[i]==='8' || umur.value[i]==='9' || umur.value[i] === '.' ){
            b++;
        }
    }
    if(b===umur.value.length && b!==0){
        check_umur = true;
    }

    let check_tinggi = false;
    let c = 0;
    for(let i = 0;i<tinggi.value.length;i++){
        if(tinggi.value[i]==='0' || tinggi.value[i]==='1' || tinggi.value[i]==='2' || tinggi.value[i]==='3' || tinggi.value[i]==='4' || tinggi.value[i]==='5' || tinggi.value[i]==='6' || tinggi.value[i]==='7' || tinggi.value[i]==='8' || tinggi.val[i]==='9' || tinggi.value[i] === '.' ){
            c++;
        }
    }
    if(c===tinggi.value.length && c!==0){
        check_tinggi = true;
    }
    console.log(`${check_berat} ${check_radio} ${check_tinggi} ${check_umur}`)

    if(check_berat && check_radio && check_tinggi && check_umur){
         document.getElementById("error-1").innerHTML = "";
         let beratbadan = parseFloat(berat.value)
         let tinggibadan = parseFloat(tinggi.value)
         tinggibadan/=100;
         let bmi = beratbadan / (tinggibadan*tinggibadan)
         

    }
    else{
        document.getElementById("error-1").innerHTML = "*Mohon isi dengan format yang benar (hanya angka semua)"
    }
    
}