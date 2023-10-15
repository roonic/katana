const params = window.location.search
const id = new URLSearchParams(params).get('id')

const showProduct = async () => {
  try {
    const product = await fetch(`/api/products`)
    console.log(`result: ${product}`)
    document.getElementsByClassName('.product').innerHTML = rating 
    }
  catch (error) {
    console.log(error)
  }
}

showProduct()
