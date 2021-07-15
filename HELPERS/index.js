function getRandom(){
    {
        let id="";
        for(let i=0;i<4;i++){
            let number = Math.floor(Math.random()*10)
            
            id+=number;
        }
        //console.log(id);
        return parseInt(id);
    }
}

module.exports = {
    getRandom,
}