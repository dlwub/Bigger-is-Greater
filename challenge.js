function biggerIsGreater(w) {
	let len = w.length
    
    for(let i=len - 1; i > 0; i -=1){
            if(w[i] > w[i-1]){
                let splitted = w.substring(i-1).split('')
                let sorted = w.substring(i-1).split('').sort() 
                let index = sorted.indexOf(splitted[0]) + 1
                if(i - 1 >= 0){
                    w = w.substring(0, i - 1) + sorted[index]
                    sorted.splice(index, 1)
                    w +=sorted.join('')
                    break;
                } else{
                    w = sorted[index]
                    sorted.splice(index, 1)
                    w +=sorted.join('')
                }
            } else {
                if(i===1){
                    return 'no answer'
                }
            }
						
        }
    return w
			
}

console.log(biggerIsGreater("imllmmcslslkyoegymoa") )

