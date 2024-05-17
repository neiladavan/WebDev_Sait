function computeTotalAmount()
{
  let totalAdult = document.getElementById('adults').value * 150;

  let noOfChild = document.getElementById('child').value

  let totalChild = 0;
  if (noOfChild) totalChild = noOfChild * 100;

  let totalAmount = totalAdult + totalChild;

  document.getElementById('totalAmount').value = totalAmount
}