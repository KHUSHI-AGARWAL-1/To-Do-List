const inp=document.querySelector('input');
const form= document.querySelector('form')

const btn=document.querySelector('button');
const list=document.querySelector('#list');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const task=form.elements[0].value;
    if(task==""){
        alert('please enter a task')
        return
    }
    
    const li=document.createElement('li');
    li.innerText=task; 
   
    li.addEventListener('click',()=>{
li.style.textDecoration="line-through";

        //li.remove();
    })
    
    const btn1=document.createElement('button');
    btn1.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    btn1.addEventListener('click',()=>{
       
        
        li.remove();
        btn1.remove();
    })
    list.append(li);
    li.append(btn1);
    
    form.elements[0].value='';
})