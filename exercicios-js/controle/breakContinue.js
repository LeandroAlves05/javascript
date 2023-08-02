const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let num in nums){
    if (num == 5){
        break
    }
    console.log(`${num} = ${nums[num]}`)
}

for (let num2 in nums){
    if (num2 == 5){
        continue
    }
    console.log(`${num2} = ${nums[num2]}`)
}

externo: // Não recomendado usar
for (a in nums) {
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}