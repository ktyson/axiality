function lerp(a, b, t) {
    var len = a.length;
    if(b.length != len) return;

    var x = [];
    for(var i = 0; i < len; i++)
        x.push(a[i] + t * (b[i] - a[i]));
    return x;
}

var A = [1,2,3];
var B = [2,5,10];

var X = lerp(A, B, 0.5);

console.log(A, X, B);