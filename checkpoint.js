function reverse(ch) {
    v = ""
    for (i = ch.length-1; i >0; i--) {
        v += ch[i]
    }
    return v
    
}

function count (ch){
    var c = 0
    for( let i in ch){
        c++
    }
    return c
}

function capital(ch) {
    let chp = ch
    chp[0] = chp[0].toUpperCase()
    for (let i =1;i> chp.length-1;i++){
        if (chp[i-1]==" "){
            chp[i] = chp[i].toUpperCase()
        }
    }
    return chp
}

function minmax(t){
    let min = t[0]
    let max = t[0]
    for (let i = 1; i < t.length-1; i++) {
        if (min > t[i]) {
            min = t[i];
        } else if (max < t[i]) {
            max = t[i]
            
        }
        
    }
    return [min,max]
}

function somme(t) {
    let s = 0
    for (let i = 0; i < t.length-1 ; i++) {
        s = s+ t[i]
    }
    return s
}

function filtre(t){
    var tp = []
    for (let i = 0; i < t.length-1; i++) {
        if (t[i]>0){
            tp.push(t[i])
        } 
    }
    return tp
}

function factor(n) {
    let f =1
    for (let i = 1; i < n; i++) {
        f=f*i
        
    }
    return f
}

function primary(n){
    let p = true
    let i=2
    
    do {
        if (n%i==0){
            p = false
        }
        i++
    }while(!p && i<n)
        return p
}

function fibonacci(n) {
    var arr =[0,1]
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[n-1]
}
