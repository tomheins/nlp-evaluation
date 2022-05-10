function string(formText){


return (/^(ftp|http|https):\/\/[^ "]+$/.test(formText)? true:false)



}


export{string}
