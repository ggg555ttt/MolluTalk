//javascript:var xhr=new XMLHttpRequest();xhr.open('GET','https://ggg555ttt.gitee.io/closuretalk//MolluTalk.js',true);xhr.onload=function(){if(xhr.readyState===4&&xhr.status===200){eval(xhr.responseText)}};xhr.send(null);
xhr=new XMLHttpRequest();xhr.open('GET','https://code.jquery.com/jquery-1.4.1.min.js',true);xhr.onload=function(){if(xhr.readyState===4&&xhr.status===200){eval(xhr.responseText)}};xhr.send(null);
$("body").append("<input id='up' hidden type='file'/>");
$("#up").change(function()
{
	var file = this.files[0];
	//console.log(this.files, 99999);
	var reader = new FileReader();
	reader.readAsDataURL(file); //调用自带方法进行转换
	reader.onload = function(e)
	{
		imgurl = e.target.result; //转化为base64
		//alert('头像上传完成\n再点击一遍即可更新');
		$($(".iBfcuf img")[img]).click();
		//alert(img);
		//console.log(imgurl, 787878);
	};
});
$(".iBfcuf img").live('click',function()
{
	//$("#img_upload_file1").click();	
	if (typeof imgurl !== 'undefined')
	{
		//alert(imgurl);
		$(this).attr('src',imgurl);
		imgurl = undefined;
	}
	else
	{
		img = $(".iBfcuf img").index($(this));
		$("#up").click()
	}
});
$(".jRPwkT span:not(.fWynih)").live('click',function()
{
	$(this).attr("hidden","hidden");
	$(this).before("<input value='"+$(this).text()+"'><button class='mingzi'>确定修改</button>");
});
$(".mingzi").live('click',function()
{
	text = $(this).siblings("input").val();
	if(jQuery.trim(text) == 0)text = $(this).siblings("span").text();
	$(this).siblings("span").removeAttr('hidden').text(text);
	$(this).siblings("input").remove();
	$(this).remove();
	
});
$(".heJhGb .medium").live('click',function()
{
	$(this).attr("hidden","hidden");
	$(this).before("<input value='"+$(this).text()+"'><button class='jiban'>确定修改</button>");
});
$(".jiban").live('click',function()
{
	text = $(this).siblings("input").val();
	if(jQuery.trim(text) == 0)text = $(this).text();
	$(this).siblings("button").removeAttr('hidden').text(text);
	$(this).siblings("input").remove();
	$(this).remove();
});