// script.js
function calculate() {
    let SAFESCORE = 100; // Initial SAFESCORE
  
    const income = parseFloat(document.getElementById('income').value);
    const survive = parseFloat(document.getElementById('survive').value);
    const productCost = parseFloat(document.getElementById('productCost').value);

    if (income == 0 || survive == 0 || productCost == 0) {
        console.log(income)
        document.getElementById('result').innerText = `SAFESCORE: NaN`;
        return;
    }
    
    const monthlySurplus = income - survive;
  
    let stress = null;
    let spendingPercentage = null;
    if (monthlySurplus)
        spendingPercentage = productCost / monthlySurplus;
    else
        spendingPercentage = productCost / income;
  
    if (spendingPercentage < 0.5) {
      stress = 0;
    } else if (spendingPercentage <= 1) {
      stress = spendingPercentage;
    } else {
        stress = spendingPercentage * 1.5;
    }
  
    const typeOfDeal = document.getElementById('typeOfDeal').value;
    const isRealValue = parseFloat(document.getElementById('isRealValue').value);
    const isInFOMO = parseFloat(document.getElementById('isInFOMO').value);
    const abilityToSpendTime = parseFloat(document.getElementById('abilityToSpendTime').value);
    const compoundExpenditure = parseFloat(document.getElementById('compoundExpenditure').value);
    const purchaseImportance = parseFloat(document.getElementById('purchaseImportance').value);
    const NegativeImpactOnLifeBalance = parseFloat(document.getElementById('negativeImpactOnLifeBalance').value);
    const ROI_time_health_money = parseFloat(document.getElementById('roiTimeHealthMoney').value);
    const bestDealPossible = parseFloat(document.getElementById('bestDealPossible').value);
    const freeAlternative = parseFloat(document.getElementById('freeAlternative').value);
  
    function calculating() {
      let addition_number = 0;
  
      console.log(typeOfDeal)
      switch (typeOfDeal) {
        case 'b':
          if (stress) addition_number -= 0.1;
          else addition_number += 0.01;
          break;
        case 'd':
            if (stress) addition_number -= 0.1;
            else addition_number += 0.01;
            break;
        case 'a': break;
        case 'c': break;
      }
  
      let TIME_SCORE = abilityToSpendTime * 150; //MAX 100
      let COMPOUND_EMOTION = 100 - compoundExpenditure * 100; //MAX 100
      let PURCHASE_IMPORTANT_SCORE = 150; //MAX 100
      let NEGATIVE_IMPACT_SOLVING = 50 * NegativeImpactOnLifeBalance; //MAX 100
      let ROI = ROI_time_health_money * 200; //MAX 200
      let BEST_DEAL = 150 * bestDealPossible; //MAX 200
      let FREE_ALTER = 200 - (200 * freeAlternative); //MAX 200
  
      if (stress) {
        if (purchaseImportance >= 0.5) {
          PURCHASE_IMPORTANT_SCORE -= (purchaseImportance * stress);
        } else if (purchaseImportance < 0.5) {
          PURCHASE_IMPORTANT_SCORE -= 50 * stress * purchaseImportance;
        }
      } else {
        PURCHASE_IMPORTANT_SCORE += (30 * (purchaseImportance) - 30);
      }
  
      let CAL_NUMBER = TIME_SCORE + COMPOUND_EMOTION + PURCHASE_IMPORTANT_SCORE +
        NEGATIVE_IMPACT_SOLVING + ROI +
        BEST_DEAL + FREE_ALTER;
  
      CAL_NUMBER -= (500 - (isRealValue * 500));
  
      if (CAL_NUMBER >= 800 && CAL_NUMBER <= 950) {
        CAL_NUMBER -= 20 * isInFOMO;
      }
  
      if (CAL_NUMBER >= 700 && CAL_NUMBER < 800) {
        CAL_NUMBER -= 40 * isInFOMO;
      }
  
      if (CAL_NUMBER >= 600 && CAL_NUMBER < 700) {
        CAL_NUMBER -= 50 * isInFOMO;
      }
  
      if (CAL_NUMBER >= 500 && CAL_NUMBER < 600) {
        CAL_NUMBER -= 100 * isInFOMO;
      } else if (CAL_NUMBER < 500) {
        CAL_NUMBER -= 200 * isInFOMO;
      }
  
      return CAL_NUMBER / 1000 + addition_number;
    }
  
    console.log(stress)
    SAFESCORE = calculating()*100;
    SAFESCORE -= stress*5
    if (SAFESCORE < 0) SAFESCORE = 0;
  
    let text = '';
    if (SAFESCORE >= 90) text = 'Nên mua, đây là quyết định tốt'
    if (SAFESCORE >= 80 && SAFESCORE < 90) text = 'Quyết định mua an toàn'
    if (SAFESCORE >= 70 && SAFESCORE < 80) text = 'Quyết định mua không tệ'
    if (SAFESCORE >= 60 && SAFESCORE < 70) text = 'Quyết định mua có rủi ro chấp nhận được'
    if (SAFESCORE >= 50 && SAFESCORE < 60) text = 'Quyết định hơi mạo hiểm, cân nhắc khi mua'
    if (SAFESCORE < 50) text = 'Không nên mua!'

    let ResultColor = '';
    if (SAFESCORE >= 80) ResultColor = 'green';
    else if (SAFESCORE >= 60 && SAFESCORE < 80) ResultColor = 'darkgoldenrod';
    else if (SAFESCORE >= 50) ResultColor = 'orange';
    else if (SAFESCORE < 50) ResultColor = 'red';

    document.getElementById('result').innerHTML = `<h3 style="color:`+ResultColor+`">Điểm: ${parseFloat(SAFESCORE).toFixed(1)}%<h3>` + `<h5 style="color:`+ResultColor+`">` + text + `</h5>`;
  }
  
