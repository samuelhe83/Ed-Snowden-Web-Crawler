process.stdin.resume();
process.stdin.setEncoding('utf-8');
var stdin_input = '';

process.stdin.on('data', function(input) {
    stdin_input += input; // Reading input from STDIN
});

process.stdin.on('end', function() {
    main(stdin_input);
});

function main(input) {
    const inputArr = input.split('\n');
    const website = inputArr[0];
    const sameSiteArr = [];
    for (let i = 1; i < inputArr.length - 1; i++) {
        if (inputArr[i].includes(website)) {
            sameSiteArr.push(inputArr[i]);
        }
    }

    sameSiteArr.forEach(site => {
        let index = site.indexOf(website);
        let sameSite = '';

        while (index !== -1) {
            for (let i = index; site[i] !== '"'; i++) {
                sameSite += site[i];
                if (site[i + 1] === '"') {
                    index = site.indexOf(website, i);
                }
            }
            process.stdout.write(sameSite + '\n');
            sameSite = '';
        }
    });
}
