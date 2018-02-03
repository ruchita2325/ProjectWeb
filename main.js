$(document).ready(function(){
    
    $("#div2").hide();
});
$(document).ready(function(){
    $("#b1").click(function(){
        $("#div2").show();
        $("#div3").hide();
    });
});
$(document).ready(function(){
    
    $("#div3").hide();
});
$(document).ready(function(){
    $("#b3").click(function(){
        $("#div3").show();
        $("#div2").hide();
    });
});
add=()=>
{
    let i=document.getElementById("id").value;
    let n=document.getElementById("name").value;
    let c=document.getElementById("course").value;
    let table=document.getElementById("table");
    let tr=document.createElement("tr");
    let t=" ";
    t+=`<td><input class="cb" type='checkbox' /></td><td> ${i} </td><td> ${n} </td><td> ${c} </td>";
    tr.innerHTML=t;
    table.appendChild(tr);
}

del=()=>
{
    let table=document.getElementById("table"); 
    let cb=table.getElementsByClassName("cb");
    for(let i=0;i<=cb.length;i++)
    {
        if(cb[i].checked)
        {
            table.deleteRow(i);
            i--;
            cb.length--;
        }
    } 
}

edit=()=>
{
    let ii=document.getElementById("e_id").value;
    let n=document.getElementById("e_name").value;
    let c=document.getElementById("e_course").value;
    let table=document.getElementById("tablemain");
    let cb=table.getElementsByClassName("cb");
    for(var i=0;i<cb.length;i++)
    {
        if(cb[i].checked)
        {
            var tr=document.createElement("tr");
            var t=" ";
            t+=`<td><input class="cb" type='checkbox' /></td><td> ${ii} </td><td> ${n} </td><td> ${c} </td>";
            tr.innerHTML=t;
            
            table.replaceChild(tr,table.childNodes[i+1]); 
        }
    }
}
