const COMPANIES = " https://recruitment.hal.skygate.io/companies"
const INCOME = "https://recruitment.hal.skygate.io/incomes/"

function sumAndAvgIncome(incomes) {
    let sum = incomes.reduce((sum, income) => sum + Number(income.value), 0);
    return {sum: sum, avg: sum/incomes.length}
}

function lastMonthIncome(incomeOfCompanie) {
  if (!incomeOfCompanie) return 0;
  if (!Array.isArray(incomeOfCompanie)) return 0;
  if (incomeOfCompanie.length < 1) return 0;
  let lastDate = 0;
  incomeOfCompanie.forEach(income => {
    if (lastDate < Number(new Date(income.date))) {
      lastDate = Number(new Date(income.date));
    }
  });
  lastDate = new Date(lastDate);
  let lastMonth = lastDate.getMonth() + 1;
  let year = lastDate.getFullYear();
  let searchMonthAndYaer = { lastMonth, year };
  let sumPerLastMonth = 0;
  incomeOfCompanie.forEach(el => {
    let elDate = new Date(el.date);
    let elMonth = elDate.getMonth() + 1;
    let elYear = elDate.getFullYear();
    if (
      elMonth === searchMonthAndYaer.lastMonth &&
      elYear === searchMonthAndYaer.year
    ) {
      sumPerLastMonth += Number(el.value);
    }
  });
  return Number(sumPerLastMonth.toFixed(2));
}

function sortArrayByField(arr, fieldName, sortWay) {
  if (!arr || !fieldName || !sortWay) return null;
  if (!Array.isArray(arr)) return null;
  if (arr.length < 1 && (sortWay !== "ASC" || sortWay !== "DESC"))
    return null;
  if (sortWay === "ASC") {
    return arr
      .map(el => {
        return el;
      })
      .sort((item1, item2) => {
        if (item1[fieldName] < item2[fieldName]) return -1;
        if (item1[fieldName] > item2[fieldName]) return 1;
        return 0;
      });
  } else if (sortWay === "DESC") {
    return arr
      .map(el => {
        return el;
      })
      .sort((item1, item2) => {
        if (item1[fieldName] < item2[fieldName]) return 1;
        if (item1[fieldName] > item2[fieldName]) return -1;
        return 0;
      });
  } else {
    return arr;
  }
}

function filterBy(arr, value) {
  if (!value) return null;
  if (!Array.isArray(arr)) return null;
  if (arr.length < 1) return null;
  let result = arr.filter(el => {
    for (let key in el) {
      console.log(el[key], el[key].toString().includes(value));
      if (el[key].toString().includes(value)) {
        return true;
      }
    }
    return false;
  });
  return result;
}

async function fetchCompanies(){
    let result = await fetch(COMPANIES)
    result = (await result).json()
    return result;
}

async function fetchIncomesById(id){
    let result = await fetch(INCOME+id);
    result = await result.json();
    return result;    
}

async function getAllReadyCompanies(){
    let companies = await fetchCompanies();
    companies = await Promise.all(companies.map(async (company) =>{
        let incomeOfCompany = await fetchIncomesById(company.id); 
        let res = sumAndAvgIncome(incomeOfCompany.incomes);
        company.sum = res.sum.toFixed(2);
        company.avg = res.avg.toFixed(2);
        company.lastMonthIncome = lastMonthIncome(incomeOfCompany.incomes);
        return company
    }))
    return companies
}

module.exports = {
  getAllReadyCompanies,
  sortArrayByField,
  filterBy
};