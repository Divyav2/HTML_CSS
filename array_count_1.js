var arr = [10, 3, 0,5, 12, 5, 3, 9,7,7, 1, 1];
var len=arr.length;
for (i = 0; i < len; i++) {
    count = 1;
    while(arr[i]==='\0')
    {
        temp=arr[i];
        arr[i]=arr[i+1];
        i++;
    }
    for (j = i + 1; j < len; j++) {
        if (arr[i] === arr[j]) {
            count++;
            arr[j] = '\0';
        }
    }

    if (arr[i] != '\0') {
        console.log(arr[i] + "-" + count);
    }
}