// set initial count
let count = 0; 

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color ="#ffbf00";
        }
        if(count < 0){
            value.style.color = "#76ff7a"
        }
        if(count === 0){
            value.style.color = "#8a795d"
        }
        value.textContent = count;
    });
});