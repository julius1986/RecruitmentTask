const COMPANIES = " https://recruitment.hal.skygate.io/companies"
const INCOME = "https://recruitment.hal.skygate.io/incomes/"

function sumAndAvgIncome(incomes) {
    let sum = incomes.reduce((sum, income) => sum + Number(income.value), 0);
    return {sum: sum, avg: sum/incomes.length}
}

async function fetchCompanies(){
    let result = fetch(COMPANIES)
    result = (await result).json()
    return result;
}

async function fetchIncomesById(id){
    let result = fetch(INCOME+id);
    result = (await result).json();
    return result;    
}

async function getAllReadyCompanies(){
    let companies = await fetchCompanies();
    companies.forEach(async (companie) =>{
        let incomeOfCompanie = await fetchIncomesById(companie.id); 
        let res = await sumAndAvgIncome(incomeOfCompanie.incomes);
        companie.sum = res.sum.toFixed(2);
        companie.avg = res.avg.toFixed(2);
    })
    return companies;
}

module.exports ={
    getAllReadyCompanies
}