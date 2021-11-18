function mostFrequent(arr, n)
    {
          
        arr.sort();
           
 
        let max_count = 1, res = arr[0];
        let curr_count = 1;
           
        for (let i = 1; i < n; i++)
        {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else
            {
                if (curr_count > max_count)
                {
                    max_count = curr_count;
                    res = arr[i - 1];
                }
                curr_count = 1;
            }
        }
       
        if (curr_count > max_count)
        {
            max_count = curr_count;
            res = arr[n - 1];
        }
        return res;
    }
 
        let arr = [1, 5, 2, 1, 3, 2, 1];
        let n = arr.length;
        document.write(mostFrequent(arr,n));
 
</script>