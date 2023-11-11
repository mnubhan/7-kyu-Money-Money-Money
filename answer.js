function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

function calculateYears(principal, interest, tax, desired) {
  let newReturn = principal
  for(var i=0;newReturn<desired;i++){
    newReturn =newReturn+newReturn*interest-newReturn*interest*tax
  }
    return i
}
