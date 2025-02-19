/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let result=[];

  transactions.forEach((e)=>{
    if(result.find(filtered => filtered?.category == e?.category)){
      return result.forEach((ele,index)=>{
        if(ele.category == e.category){
          ele.totalSpent+=e.price
        }
      })
    }else{
      return result.push({category:e.category,totalSpent:e.price})
    }
  })

  return result;
}

module.exports = calculateTotalSpentByCategory;
