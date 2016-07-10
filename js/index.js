$(function(){
	var bw=$(".box").width();
	var index=0;
	var next=0;
	$("a",$(".btn")[0]).css({"left":bw}).eq(0).css({"left":0})
	$("a",$(".btn")[0]).eq(0).addClass("hot")
    var flag=true;
	var t=setInterval(moveR,2000);
	$($(".box")[0]).hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(moveR,2000)
	})

	$("a",$(".btn")[0]).hover(function(){
		var num=$(this).index;
		$("a",$(".box")[0]).eq(next).css({"left":bw});
		$("a",$(".box")[0]).eq(num).animate({"left":-bw});
		$("a",$(".box")[0]).eq(next).animate({"left":0});
		$("a",$(".btn")[0]).eq(num).removeClass("hot")
		$("a",$(".btn")[0]).eq(next).addClass("hot");
		next=num;
		index=next;
	})
	function moveL(){
		next++;
		if(next==$("a",$(".box")[0]).length){
			next=0;
		}
		$("a",$(".box")[0]).eq(next).css({"left":bw});
		$("a",$(".box")[0]).eq(index).animate({"left":-bw});
		$("a",$(".box")[0]).eq(next).animate({"left":0},function(){
			flag=true;
		});
		$("a",$(".btn")[0]).eq(index).removeClass("hot")
		$("a",$(".btn")[0]).eq(next).addClass("hot");
		index=next;

	}

	function moveR(){
		next--;
		if(next<0){
			next=($("a",$(".box")[0]).length)-1;
		}
		$("a",$(".box")[0]).eq(next).css({"left":-bw});
		$("a",$(".box")[0]).eq(index).animate({"left":bw});
		$("a",$(".box")[0]).eq(next).animate({"left":0},function(){
			flag=true;
		});
		$("a",$(".btn")[0]).eq(index).removeClass("hot")
		$("a",$(".btn")[0]).eq(next).addClass("hot");
		index=next;

	}
	$($(".pre")[0]).hover(function(){
		if(flag){
			flag=false;
			moveL();
		}
	})
	$($(".next")[0]).hover(function(){
		if(flag){
			flag=false;
			moveR();
		}
	})
})