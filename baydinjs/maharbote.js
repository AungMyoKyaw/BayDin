function maharbote (year,day) {
	//Aung Myo Kyaw
	var အကြွင်း=year%7;
	if(အကြွင်း==0){
		အကြွင်း=7;
	}
	var တိုင်စဉ်=[];
	var အဖွား=["ဘင်္ဂ","မရဏ","အထွန်း","သိုက်","ရာဇာ","ပုတိ","အဓိပတိ"];
	တိုင်စဉ်.push(အကြွင်း);
	for(var i=0;i<6;i++){
		var ထည့်ရန်=တိုင်စဉ်[i]+3;
		//console.log(ထည့်ရန်);
		if(ထည့်ရန်>7){
			တိုင်စဉ်.push(ထည့်ရန်-7);
		} else {
			တိုင်စဉ်.push(ထည့်ရန်);
		}
	}
	// console.log(တိုင်စဉ်);
	return အဖွား[တိုင်စဉ်.indexOf(day)];
	//console.log(အကြွင်း);
}

module.exports = maharbote;
