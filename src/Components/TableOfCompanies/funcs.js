const COMPANIES = " https://recruitment.hal.skygate.io/companies"
const INCOME = "https://recruitment.hal.skygate.io/incomes/"

function sumAndAvgIncome(incomes) {
    let sum = incomes.reduce((sum, income) => sum + Number(income.value), 0);
    return {sum: sum, avg: sum/incomes.length}
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

module.exports ={
    getAllReadyCompanies
}