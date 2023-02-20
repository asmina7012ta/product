function addProduct(){
    product={pname:pname.value,id:pid.value,price:pprice.value}
    if(product.id in localStorage){
        alert("product already exist")
    }else{
        alert("new product added")
    }
    localStorage.setItem(product.id,JSON.stringify(product))
}
function productData(){
    window.location="home.html"
}
function search(){
    keyid=p1.value
    if(keyid in localStorage){
        detail=JSON.parse(localStorage.getItem(keyid))
        result.innerHTML=`<h4>Product Name:${ detail.pname}</h4>
        <h4>Product id:${ detail.id}</h4>
        <h4>Product price:${ detail.price}</h4>`

    }
    else{
        alert("product not found")
        result.innerHTML=`<h1 class="text-danger">PRODUCT NOT FOUND</h1>`
    }
}
function logout(){
    window.location="index.html"
}




