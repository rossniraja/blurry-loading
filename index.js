const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load=0
let int = setInterval(blurring, 40)
function blurring(){
    load ++
    if (load>99){
        clearInterval(int)
    }
loadText.innerText = `${load}%`//backtick below esc key

bg.style.filter=`blur(${scale(load,0,100,40,0)}px)`;
//(num - in_min): Normalization. Finds how far the number is from the start of the input range.
/// (in_max - in_min): Ratio calculation. Divides by the total size of the input range to get a percentage (0 to 1).
//* (out_max - out_min): Scale up. Multiplies this percentage by the total size of the new range.
//+ out_min: Shifting. Adds the start of the new range to align the final answer correctly. 

    console.log(load)
}
const scale=(num,in_min,in_max,out_min,out_max)=>
    {
        return ((num-in_min)/(in_max-in_min)*(out_max-out_min)+out_min);

}
//load → your variable

//${load} → takes value of variable

//% → just normal text