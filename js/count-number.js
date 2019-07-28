var funcCountAnimate = function countAnimate(objThis) {
    const DURATION = 2.5

    const from = parseInt(objThis.data().from, 10)
    const to = parseInt(objThis.data().to, 10)
    let obj = {count: from}

    TweenMax.to(obj, DURATION, {
      count: to,
      ease: Power3.easeInOut,
      onUpdate: () => {
        objThis.text(Math.floor(obj.count));
      }
    })
}


// $(function() {
//
//     const DURATION = 2.5
//
//     const from = parseInt(0, 10)
//     const to = parseInt(4.5, 10)
//     let obj = {count: from}
//
//     TweenMax.to(obj, DURATION, {
//       count: to,
//       ease: Power3.easeInOut,
//       onUpdate: () => {
//         $('#count').text(Math.floor(obj.count));
//       }
//     })
//
// });
//
