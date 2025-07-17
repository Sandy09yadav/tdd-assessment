function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.+)\n/);
        if (match) {
            let delimiterPart = match[1];
            // multiple delimiters or length
            if (delimiterPart.startsWith('[')) {
                const all = delimiterPart.match(/\[([^\]]+)\]/g);
                delimiterPart = all
                    .map(d => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                    .join('|');
            }
            delimiter = new RegExp(delimiterPart);
        }
        numbers = numbers.split('\n')[1];
    }

    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    return nums.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
}
module.exports = { add };