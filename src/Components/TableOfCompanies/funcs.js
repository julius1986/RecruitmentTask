/**
 * Calculate total sum and avg income
 * @function sumAndAvgIncome
 * @param {Array<{income:value}>} incomes - array of objects [{income:value}, ...]
 * @return {Object} {sum: Number, avg: Number}
 */
function sumAndAvgIncome(incomes) {
  let sum = incomes.reduce((sum, income) => sum + Number(income.value), 0);
  return { sum: sum, avg: sum / incomes.length };
}

/**
 * Method calculates income by last month.
 * @param {Array} incomeOfCompanie - list of incomes a company
 * @return {number} total incomes by last month
 */
function getLastMonthIncome(incomeOfCompany) {
  if (!incomeOfCompany) return 0;
  if (!Array.isArray(incomeOfCompany)) return 0;
  if (incomeOfCompany.length < 1) return 0;
  let lastDate = 0;
  incomeOfCompany.forEach(income => {
    if (lastDate < Number(new Date(income.date))) {
      lastDate = Number(new Date(income.date));
    }
  });
  lastDate = new Date(lastDate);
  let lastMonth = lastDate.getMonth() + 1;
  let year = lastDate.getFullYear();
  let searchMonthAndYaer = { lastMonth, year };
  let sumPerLastMonth = 0;
  incomeOfCompany.forEach(el => {
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
/**
 * Function creates new copy of array and sorts by the way ASC or DESC.
 * @param {Array} arr - array of objects for sort
 * @param {string} fieldName - name of object field
 * @param {string} sortWay - ASC or DESC
 * @return {Array} new sorted array.
 */
function sortArrayByField(arr, fieldName, sortWay) {
  if (!arr || !fieldName || !sortWay) return null;
  if (!Array.isArray(arr)) return null;
  if (arr.length < 1 && (sortWay !== "ASC" || sortWay !== "DESC")) return null;
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
/**
 * Filters array of object by all fields.
 * @param {Array} arr - array of objects
 * @param {string} value - value for filter
 * @returns {Array} return new filtered array
 */
function filterBy(arr, value) {
  if (!value) return null;
  if (!Array.isArray(arr)) return null;
  if (arr.length < 1) return null;
  let result = arr.filter(el => {
    for (let key in el) {
      if (el[key].toString().includes(value)) {
        return true;
      }
    }
    return false;
  });
  return result;
}
/**
 * Function fetch all companies
 * @param {string} companiesUrl api url for fetching companies  
 * @return {Promise<Array<{id:number, name:string, city:string}>>} return list of companies from url
 */
async function fetchCompanies(companiesUrl) {
  let result = await fetch(companiesUrl);
  result = (await result).json();
  return result;
}
/**
 * Fetch imcomes by id.
 * @param {number} id id of company
 * @param {string} incomeUrl api url to fetch data of company
 * @return {Array<{income: number, date: date}>} array of objects with income and date
 */
async function fetchIncomesById(id, incomeUrl) {
  let result = await fetch(incomeUrl + id);
  result = await result.json();
  return result;
}
/**
 * Creates ready array of companies. 
 * @param {string} companiesUrl api url for fetching companies  
 * @param {string} incomeUrl api url to fetch data of company
 * @return {Array<{id:number, name:string, city:string, sum: number, avg: number, lastMonthIncome: number}>} array of companies
 */
async function getAllReadyCompanies(companiesUrl, incomeUrl) {
  let companies = await fetchCompanies(companiesUrl);
  companies = await Promise.all(
    companies.map(async company => {
      let incomeOfCompany = await fetchIncomesById(company.id, incomeUrl);
      let res = sumAndAvgIncome(incomeOfCompany.incomes);
      company.sum = res.sum.toFixed(2);
      company.avg = res.avg.toFixed(2);
      company.lastMonthIncome = getLastMonthIncome(incomeOfCompany.incomes);
      return company;
    })
  );
  return companies;
}

module.exports = {
  getAllReadyCompanies,
  sortArrayByField,
  filterBy
};
