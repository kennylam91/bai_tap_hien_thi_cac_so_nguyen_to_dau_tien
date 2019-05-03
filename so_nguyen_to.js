let SNT_number = parseInt(prompt("Số lượng số nguyên tố cần hiển thi: "));
let SNT_count = 1;
let N = 2;
let result = "";
while (SNT_count <= SNT_number) {

    for (i = 2; i < N; i++) {
        let x = N % i;
        if (x == 0) {
            break;
        } else {
            continue;
        }
    }
    if (i == N) {
        result += N + " ";
        SNT_count++;
    }
    N++;
}
document.write(SNT_number + " so nguyen to dau tien la: " + result);