const display = document.getElementById("displays");

function ValueAppend(input)
{
    displays.value += input;
    
}

function ClearValues()
{
    displays.value =" ";
}

function calculate()
{
     try{
        displays.value = eval(displays.value);
    }
    catch(error){
        displays.value = "Error";
    }
}

function DeleteValue()
{
   displays.value = displays.value.slice(0, -1);
}

function Squareapplied(){
    displays.value *= displays.value;
}