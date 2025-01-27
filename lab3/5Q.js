function updateProductInfo(product){
    let {id,name} = {...product};
    let c = {id,name};
    return {...c,discount:10,inStock:true}
}
const product = {id: 101, name: "Laptop", price: 1000, category:"Electronics"}
console.log(updateProductInfo(product))
