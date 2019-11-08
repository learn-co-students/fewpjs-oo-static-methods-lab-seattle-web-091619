class Formatter 
{
    static capitalize(string)
    {
        const letters = string.split("");
        let capLetter = letters[0].toUpperCase();
        letters[0] = capLetter;
        let newCap = letters.join('');
        return newCap;
    }

    static sanitize(string)
    {
        let str = string.replace(/[!$@#*(){}\^]/gim,"");
        return str.trim();
    }

    static titleize(sentence) 
    {
        let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
        let result = [];
        let arrayOfWords = sentence.split( " " )
        for ( let n = 0; n < arrayOfWords.length; n++ ) 
        {
            if ( n == 0 ) 
            {
                result.push( this.capitalize( arrayOfWords[ n ] ) )
            } 
            else 
            {
                if ( exceptions.includes( arrayOfWords[ n ] ) ) 
                {
                     result.push( arrayOfWords[ n ] )
                } 
                else 
                {
                    result.push( this.capitalize( arrayOfWords[ n ] ) )
                }
            }
    
        }
        return result.join( " " );
      
    }
}