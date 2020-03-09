const COMPANIES = " https://recruitment.hal.skygate.io/companies"
const INCOME = "https://recruitment.hal.skygate.io/incomes/"

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

module.exports ={
    fetchCompanies,
    fetchIncomesById
}