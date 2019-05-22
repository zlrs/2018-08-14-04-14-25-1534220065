// ._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
// |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
// |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|

module.exports = function main(str_num) {
    class Picture {
        constructor (number, line1, line2, line3) {
            this.number = number; // int
            this.linesList = new Array(line1, line2, line3);
        }
    }

    digits = new Array(
        new Picture(0, '._.', '|.|', '|_|'),
        new Picture(1, '...', '..|', '..|'),
        new Picture(2, '._.', '._|', '|_.'),
        new Picture(3, '._.', '._|', '._|'),
        new Picture(4, '...', '|_|', '..|'),
        new Picture(5, '._.', '|_.', '._|'),
        new Picture(6, '._.', '|_.', '|_|'),
        new Picture(7, '._.', '..|', '..|'),
        new Picture(8, '._.', '|_|', '|_|'),
        new Picture(9, '._.', '|_|', '..|')
    )

    output = ''
    for (let currentLine = 0; currentLine < 3; currentLine++)
        for (let i = 0; i < str_num.length; i++) {
            currentNumber = str_num[i] - '0'
            
            output += digits[currentNumber].linesList[currentLine];
            
            if (i == str_num.length -1)
                output += '\n'
            else
                output += ' '
        }
    
    return output
};