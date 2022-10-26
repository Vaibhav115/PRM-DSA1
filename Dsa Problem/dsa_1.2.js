// Given a string str, your task is to write a program which takes a string str as its only input and returns an integer denoting the no of palindromic subsequence (need not necessarily be distinct) which could be formed from the string str.



	function countPS(str)
	{
		let N = str.length;

		let str1 = new Array(N);
		for(let i=0;i<N;i++)
		{
			str1[i]=new Array(N);
			for(let j=0;j<N;j++)
			{
				str1[i][j]=0;
			}
		}

		
		for (let i = 0; i < N; i++)
			str1[i][i] = 1;

		
		for (let L = 2; L <= N; L++) {
			for (let i = 0; i <= N-L; i++) {
				let k = L + i - 1;
			if (str[i] == str[k]) {
				str1[i][k] = str1[i][k - 1]
									+ str1[i + 1][k] + 1;
			}else{
				str1[i][k] = str1[i][k - 1]
									+ str1[i + 1][k]
									- str1[i + 1][k - 1];
			}
			}
		}

		
		return str1[0][N - 1];
	}
	

	let str = "abcb";
	console.log("Total palindromic "
						+ "subsequence are : "
						+ countPS(str));
	