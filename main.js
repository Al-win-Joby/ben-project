let previewContainer = document.querySelector('.products-preview');
let preveiwBox= previewContainer.querySelectorAll('.preview')
console.log("Njo")

document.querySelectorAll('.product').forEach(product =>{
    
    product.onclick =()=>{
        previewContainer.style.display='flex';
        let name = product.getAttribute('data-name');
        preveiwBox.forEach(preview=>{
            let target = preview.getAttribute('data-name');
            if(name==target){
                preview.classList.add('active');
            }
        })
    }
});

preveiwBox.forEach(close =>{
    close.querySelector('.fa-times').onclick =()=>{
        close.classList.remove('active');
        previewContainer.style.display='none';

    }
})
