let num1='';
let num2='';
let op='';
let total='';

$(document).ready(function()
{

    $('button').on('click',function(e){

        let btn=e.target.innerHTML;

        if(btn>='0' && btn<="9" || btn=='.'){
            handleNum(btn);
        }
        else if(btn==='Clear')
        {
            num1=num2=op=total='';
            displayButton(total);
        }
        else{
            handleOp(btn);
        }
    });

});

function handleNum(num)
{
    if(op===""){
        num1+=num;
        displayButton(num1);
    }
    else{
        num2+=num;
        displayButton(num1+op+num);
    }

    

}
function handleOp(oper)
{
    if(op==="")
    {
        op=oper;
    }
    else{
            handleres();
            op=oper;
    }
        
}

function handleres()
{
    switch(op){
        
        case '+':
            total= +num1 + +num2;
            
            break;
        
        case '-':
            total= +num1 - +num2;
            
            break;  
        
        case '/':
            total= +num1 / +num2;
                    
                    break; 
                
        case 'X':
            total = +num1 * +num2;
            
            break;
        
        case '%':
            total = +num1 % +num2;
                
                break;
            
    }

displayButton(total);    

updateVariables();
        

}

function displayButton(btn)
{   
    if(btn=='')
        $('.input').text(0);
    else
        $('.input').text(btn);

}

function updateVariables()
{
    num1=total;
    num2="";
}