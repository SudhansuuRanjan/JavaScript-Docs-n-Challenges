
// getting frequency of each character of a string

function getCharString(strg){
    let str = strg.replace(/ /g, "");
    const map = {};
    str.split("").forEach(element => {
            map[element] = map[element] ? map[element] + 1 : 1;
    });

    let max = 1;
    let char = str[0];

    for (const key in map) {
        if(map[key] > max){
            max = map[key];
            char = key;
        }
    }
    console.table(map);
    return char;
}

const res = getCharString("Hello world this is Sudhanshu Ranjan");
console.log(res);
/*

Output
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    H    │   1    │
│    e    │   1    │
│    l    │   3    │
│    o    │   2    │
│    w    │   1    │
│    r    │   1    │
│    d    │   2    │
│    t    │   1    │
│    h    │   3    │
│    i    │   2    │
│    s    │   3    │
│    S    │   1    │
│    u    │   2    │
│    a    │   3    │
│    n    │   3    │
│    R    │   1    │
│    j    │   1    │
└─────────┴────────┘
l   */