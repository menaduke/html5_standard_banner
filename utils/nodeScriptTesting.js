var fs = require('fs');
var rimraf = require('rimraf');

function init() {
    let firstListData;
    let firstPromise = new Promise((resolve, reject) => {
        firstListData = fs.readdirSync('../assets', { encoding: 'utf8'})
        console.log('hello1');
        resolve();
    }).then(() => {
        let fLData = firstListData.filter(names => names !== '.DS_Store');
        //once you get the list of data from the first list then do a comparison for the rest
        console.log('hello2', fLData);
        let listTwo =[];
        fLData.forEach(names => {
            let getListForSizesFolders = fs.readdirSync('../assets/'+names).filter(names => names !== '.DS_Store');
            listTwo.push(getListForSizesFolders);
        });
        return { folderTwo: listTwo,
                    folderOne: fLData
        }
    }).then(({ folderTwo, folderOne}) =>{
        //only return a list of folder 1 that contain .cache folder
        let tracker = {};
        let arrayTracker = [];
        folderTwo.forEach((anotherArray, index, array) => {
            anotherArray.forEach(item => {
                if(item === '.cache') {
                    // tracker[folderOne[index]] = 1;
                    arrayTracker.push(folderOne[index]);
                }
            })
        });
        return arrayTracker;
    }).then((tracked)=>{
        //returns list of items that have .cache file
        console.log('hello5', tracked);
        if(tracked) {
            tracked.forEach(folderName => {
                console.log('REMOVING', folderName);
                rimraf.sync(`../assets/${folderName}/.cache`,{}, function () { console.log(folderName, 'done removing .cache'); });
            })
        }
    }).then(()=>{
        console.log('SUCCESSFULLY REMOVED .CACHE from ../assets/**/.cache')
    }).catch((err) => {
        console.log("ERROR:", err);
    })
}

init();