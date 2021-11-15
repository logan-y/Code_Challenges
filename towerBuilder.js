// const towerBuilder = (levels) => {
//     var tower = [];
//     for (var i = 0; i < levels; i++) {
//     tower.push(" ".repeat(levels - i - 1)
//     + "*".repeat((i * 2)+ 1)
//     + " ".repeat(levels - i - 1))
//     }
//     console.log(tower.join('\r\n'));
//     return;
//     }

// towerBuilder(25);

const buildTower = floors => {
    let stars = 1;
    let spaces = (floors*2)-2
    let tower = [];
    let floor = '';
    for(let i = 0; i < floors; i++){
        for(let x = 0; x < (spaces/2); x++){
            floor += " "
        }
        for(let j = 0; j < stars; j++){
            floor += "*"
        }
        for(let n = 0; n < (spaces/2); n++){
            floor += " "
        }
        tower.push(floor)
        spaces -= 2;
        stars += 2;
        floor = '';
    }
    for(let i = 0; i < floors; i++){
        console.log(tower[i]);
    }
}


buildTower(6);