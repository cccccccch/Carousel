window.onload = function () {
    const slider_item = document.querySelectorAll('.slider-item')
    for (let index = 0; index < slider_item.length; index++) {
            const Img = document.createElement('img')
            Img.src = `./imgs/${index+1}.jpg`
            Img.style.width = '500px';
            Img.style.height = '100%';
            slider_item[index].appendChild(Img)
    }
    const slider_box = document.querySelector('.slider')
    const first_item = slider_box.firstElementChild
    const last_item = slider_box.lastElementChild
    const C_first_item = first_item.cloneNode(true)
    const C_last_item = last_item.cloneNode(true)
    slider_box.appendChild(C_first_item)
    slider_box.insertBefore(C_last_item,slider_box.children[0])
    let step = 0
    const step_sumbPx = 500
    let times = setInterval(()=>{
        if(step>4){
            step = 0   
        }
        const li_box = document.querySelectorAll('.focus-item')
        for (let index = 0; index < li_box.length; index++) {
            li_box[index].style.backgroundColor = '#fff'
        }
        if(step<4){
            li_box[step+1].style.backgroundColor = '#999'
        }else{
            li_box[0].style.backgroundColor = '#999'
        }
        step++
        slider_box.style.left = `-${step*step_sumbPx+500}px`;
    },3000) 
}
