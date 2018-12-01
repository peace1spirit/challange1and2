function fibonacci(N){
    let before=0,next=1
    let arrFibo=[]
    let temp
    for (let i = 0; i < N; i++) {
        arrFibo.push(before)
        temp=next
        next=before+next
        before=temp
    }
    console.log(arrFibo)
}

fibonacci(10)