
/**
 * 
 */
class Letter {
    /**
     * 
     * @param {string} char a string of one letter
     */
    constructor(char){

        // validate input
        if (char.length > 1 || char.length < 1){
            throw new Error("Letter expects one character long string as an arguement");
        }
        this.char = char;

        // check if it's in the alphabet
        const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.visible = alpha.includes(char)? false: true;
    }
    
    /**
     * @returns {string};
     */
    toString() {
        return this.visible ? this.char : "_";
    }

    /**
     * Used when the user guesses the character. Returns if the guess was 
     * correct and sets the visibility to be true if the guess was correct. 
     * @param {string} guessChar the character to guess
     * @returns {boolean} true if the character was the right one, false if not
     */
    guess(guessChar) {
        if (guessChar.length > 1 || guessChar.length < 1){
            throw new Error("guessChar() expects one character long string as an arguement");
        }
        let correct = (this.char === guessChar);
        if (correct){
            this.visible = true;
        }
        return correct;
    }

    /**
     * gives the correct character back
     * @returns {string}
     */
    getSolution(){
        return this.char;
    }
}

module.exports = Letter;
