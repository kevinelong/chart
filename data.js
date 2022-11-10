const data = { "3": 4, "4": 11, "5": 38, "6": 50, "7": 71, "8": 105, "9": 126, "10": 122, "11": 111, "12": 90, "13": 106, "14": 80, "15": 42, "16": 28, "17": 10, "18": 5 };
let total = 0;
let sales = [];
for (k in data) {
    let v = data[k];
    let n = Number(k);
    let c = String.fromCharCode(65 + n - 3);
    sales.push({ id: c, value: v });
    total += v;
}
let columns = 5;
let thresholds = [];
sales.sort((a, b) => b.value - a.value);
sales.forEach(s => console.log(s.id, s.value))

const maximum = sales[0].value;
let step = maximum / columns;
const minimum = sales[sales.length - 1].value;
let current = minimum + step;
let last = minimum;
while (last <= maximum) {
    thresholds.push({ to: Math.floor(current), from: Math.floor(last) });
    last = current;
    current += step;
}
thresholds.forEach(t => console.log("T", t.from, t.to));
filtered = thresholds.map(t => {
    return { 
        sales : sales.filter(s => s.value >= t.from && s.value < t.to),
        threshold: t
    };
});

//output
const targetLength = 3;
const z = n => String(n).padStart(targetLength, '0');
let context = filtered.map(f => {
    return {
        subtotal : f.sales.map(o => o.value).reduce((p, c) => p + c, 0),
        products : f.sales,
        threshold: f.threshold 
    }
});
console.log(context.map(o => (o.subtotal / total).toFixed(2) + " " + z(o.subtotal) + " " + o.products.map(s=>`${s.id}(${z(s.value)})`).join(" ")).join("\n"));
console.log(sales.length)

// FIBO
// let f = 5;
// let last = 1;
// const maximum = sales[sales.length - 1].value;
// while (f < sales.length) {
//     thresholds.push({ to: sales[last - 1].value, from: sales[f].value });
//     swap = f;
//     f = f + last;
//     last = swap;
// }
// thresholds.push({ to: last, from: maximum });
