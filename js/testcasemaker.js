
class Item {
    constructor(name, value) {
    this.name = name
                this.value = value
this.count = 0
            }
Buy() {
    this.count += 1
}
get cost() {
                return this.value * this.count
            }
get info() {
                return `${this.name} ${this.value}yen`
            }
get info2() {
                return `${this.name} ${this.value}yen*${this.count}`
            }
Reset() {
    this.count = 0
}
        }
class Cart {
    constructor() {
    this.items = []
}
get sum() {
    let total = 0
for (const item of this.items) {
    total += item.cost
}
return total
            }
Add(cmds) {
    let name = cmds[1]
let value = Number(cmds[2])
let newItem = new Item(name, value)
this.items.push(newItem)
            }
CheckOut() {
    let ret = ""
let total = this.sum
for (const i in this.items) {
    ret += `${i}:${this.items[i].info2}\n`
                    this.items[i].Reset()
                }
ret += `total:${total}yen`
return ret
            }
Show() {
    let ret = ""
for (const i in this.items) {
    ret += `${i}:${this.items[i].info}\n`
}
return ret.slice(0, -1)
            }
Buy(cmd) {
    //console.log(this.items[Number(cmd[1])])
    //console.log(cmd[1])
    this.items[Number(cmd[1])].Buy()
}
        }
function getrand() {
            return Math.random()
        }
function randrange(min, max) {
    min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + min);
        }
function ACjudge(AC,all){
            if(AC==all)return "AC"
else return "WA"
        }
function makecase(case_num = 10) {
    item_name_box = [
        "Alfa",
        "Bravo",
        "Charlie",
        "Delta",
        "Echo",
        "Foxtrot",
        "Golf",
        "Hotel",
        "India",
        "Juliet",
        "Kilo",
        "Lima",
        "Mike",
        "November",
        "Oscar",
        "Papa",
        "Quebec",
        "Romeo",
        "Sierra",
        "Tango",
        "Uniform",
        "Victor",
        "Whiskey",
        "X-ray",
        "Yankee",
        "Zulu"
    ]
            let cases = []
let answers = []
let mycart = new Cart()
let item_len = item_name_box.length
for (let i = 0; i < case_num; i++) {
    let cmd = []
let ans = ""
let item_count = []
let item_index = []
let cnt = 0
mycart = new Cart()
for (let j = 0; j < item_len; j++) {
    item_count.push(0)
                    item_index.push(-1)
                }
for (let j = 1; j < 1000; j++) {
                    if (j % 200 == 0 || j == 999) {
    cmd.push(["checkout"])
                        ans += (mycart.CheckOut() + "\n")
                    }
else if (j % 100 == 0) {
    cmd.push(["show"])
                        ans += (mycart.Show() + "\n")
                    }
else {
                        const r = randrange(0, item_len)
if (item_count[r] == 0) {
                            const value = randrange(1, 20) * 50
cmd.push([`add ${item_name_box[r]} ${value}`])
mycart.Add(["add", item_name_box[r], value.toString()])
item_count[r]++
item_index[r] = cnt
cnt++
                            //console.log(item_count)
                        }
else {
    cmd.push([`buy ${item_index[r]}`])
                            mycart.Buy(["buy", item_index[r].toString()])
item_count[r]++
                        }
                    }
                }
cmd.push(["exit"])
cases.push(cmd.join("\n"))
answers.push(ans)
            }
//console.log(cases[0])
return [cases, answers]
        }
let res = makecase()
const answers=res[1]
const testcase=res[0]
    /*
    const input = res[0][0].split("\n")
    mycart = new Cart()
    for (const inp of input) {
        const cmd = inp.split(" ")
console.log(cmd)
let out = ""
if (cmd[0] == "exit") break
else if (cmd[0] == "add") mycart.Add(cmd)
else if (cmd[0] == "show") out = mycart.Show()
else if (cmd[0] == "buy") mycart.Buy(cmd)
else if (cmd[0] == "checkout") out = mycart.CheckOut()
if (out != "") console.log(out)
    }
*/

