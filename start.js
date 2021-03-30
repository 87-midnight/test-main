const prints = (param) =>{
    console.log(param)
}

function query(){
    let search_element = document.evaluate("//div[@class='search'/input")
    let node = search_element.iterateNext()
    while (node){
        node.value="xxx";
        node.click()
        node = search_element.iterateNext()
    }
}