const numbers = [1,2,3,4,5];
setTimeout(() => {
    console.log('First element: ', numbers[0]);
    setTimeout(() => {
        console.log('Second element: ', numbers[1]);
    })
    setTimeout(() => {
        console.log('Third element: ', numbers[2]);
    },1000)
    setTimeout(() => {
        console.log('Fourth element: ', numbers[3]);
    },1000)
    setTimeout(() => {
        console.log('Fifth element: ', numbers[4]);
    },1000)
})