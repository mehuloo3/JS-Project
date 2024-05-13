function cal()
{
    const Bill=parseFloat(document.getElementById("bill").value);
    const Perc=parseFloat(document.getElementById("tip").value);

    //cal the tip
    const Amount=Bill*(Perc/100);
    const total=Amount+Bill;

    //display
    document.getElementById("Amt").textContent='$'+ Amount.toFixed(2);
    document.getElementById("ttl").textContent='$'+total.toFixed(2);
    
}