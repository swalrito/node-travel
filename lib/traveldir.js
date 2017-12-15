const fs = require('fs')
const path=require('path')

function travel (dir,callback){
    fs.readdirSync(dir).forEach(file => {
        let pathname=path.join(dir,file)
        if(fs.statSync(pathname).isDirectory()){
            console.log(pathname)
            travel(pathname,callback)
        }
        else{
            callback(pathname)
        }
    });
}

travel('/Users/pengdinglin/git_resposritories/vue-manage-master',function(filename){
    console.log(filename)
})