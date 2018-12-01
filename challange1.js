function FPB(a,b){
    if (b==0)
        return a
    else
        return FPB(b,a % b)
}

function KPK(N){   
    let tKPK =1
    for (let i = 2; i <=N; i++) {
        tKPK=(tKPK*i) / FPB (tKPK,i)
    }
    console.log(tKPK)
}
KPK(10)
KPK(15)