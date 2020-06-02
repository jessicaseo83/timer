const args = process.argv.slice(2)
const sortedArgs = args.sort((a, b) => a - b);
const numArr = sortedArgs.map(e => Number(e));

const time = [];
for (let item of numArr) {
  if(item % 1 === 0 && item >= 0) {
    time.push(item);
  }
}

const timeMilliseconds = time.map(e => e * 1000);


// print dot
let alarmTime = timeMilliseconds[0]

for (let i = 0; i < timeMilliseconds.length; i++) { 
  setTimeout(() => {
    process.stdout.write(".");
  }, alarmTime);
  let nextIndex = i + 1;
  alarmTime = timeMilliseconds[nextIndex];
}

setTimeout(() => {
  process.stdout.write('\n');
}, timeMilliseconds[timeMilliseconds.length - 1]);