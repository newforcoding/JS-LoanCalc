function computeLoan(){
 var amount = document.getElementById('amount').value
 var interst_rate = document.getElementById('interst_rate').value
 var month = document.getElementById('months').value
 var interest = (amount * (interst_rate * .01)) / month
 var payment = ((amount / month )+ interest).toFixed(2)
 payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
 document.getElementById('payment').innerHTML = "Monthly Payment = $" +payment  
}