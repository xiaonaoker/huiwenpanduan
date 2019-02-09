window.onload=function() {
    //将原字符串反转的函数
    var reversal=function(str){
        var arr2=str.split("");
        for(var i=0;i<arr2.length;i++){
            arr2[i]=str.charAt(arr2.length-1-i);
        }
        str=arr2.join("");
        return str;
    };

    var front,fronts,back,
        btn1 = document.getElementById("btn1"),
        btn2 = document.getElementById("btn2"),
        rst = document.getElementById("rst");

    btn1.onclick = function () {
        rst.innerHTML="";
        ipt=document.getElementById("ipt").value;
        if(ipt.length%2==0){// alert("字符串是偶数位");
            front=ipt.substr(0,ipt.length/2);
            // alert(front);
            back=ipt.substr(ipt.length/2,ipt.length/2);
            // alert(back);
            fronts=reversal(front);
            // alert(fronts);
        }else{ // alert("字符串是奇数位");
            front=ipt.substr(0,(ipt.length-1)/2);
            back=ipt.substr((ipt.length+1)/2,(ipt.length-1)/2);
            fronts=reversal(front);}
        if(fronts==back){
            rst.innerHTML="是";
        }else{
            rst.innerHTML="否";
        }
    };

    btn2.onclick=function(){
        var ipt=document.getElementById("ipt");
        ipt.value="";
        rst.innerHTML="";
    }
};

//charAt(0):字符串的第n个字符
// substring(start,end)：截取从start到end之间的字符串
// substr(start,length)表示从start位置开始，截取length长度的字符串。
// replace(,)后面一位代替前面一位
//splice:从指定位置删除掉几个字符（并用什么代替）//数组
//slice:返回已有数组中选定的位置开始到结束的子数组//数组
// split:字符串按指定pattern拆分的数组//返回一个数组

