// ==UserScript==
// @name         MolluTalkChange-Test
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  针对MolluTalk人物自定义功能的扩展插件-测试版
// @author       WumberBee
// @match        https://mollutalk.com/*
// @icon         https://mollutalk.com/_next/image?url=%2Fimage%2Fui%2Fheader%2Farona.png&w=256&q=75
// @grant        unsafeWindow
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.4.min.js
// ==/UserScript==
 
(function() {
    'use strict';
    /* globals jQuery, $, waitForKeyElements */
 
    var img;
    var imgurl;
    var text;
 
    function download_txt(filename,content,contentType) {
    if (!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    }
 
    $(".bIcduz").append("<a style='display:flex;align-items:center;text-decoration:none' id='load'><button class='common__IconButton-sc-1ojome3-0 Header__QuestionButton-sc-17b1not-3 mvcff kNOatn bold'><b style='color:red;'>讀</b></button></a>←读取专用存档文件<input id='savefile' hidden type='file'/>");
    $(".bIcduz").append("<a style='display:flex;align-items:center;text-decoration:none' id='save'><button class='common__IconButton-sc-1ojome3-0 Header__QuestionButton-sc-17b1not-3 mvcff kNOatn bold'><b style='color:red;'>存</b></button></a>←生成专用存档文件");
    $(".bIcduz").append("<a style='display:flex;align-items:center;text-decoration:none' id='help'><button class='common__IconButton-sc-1ojome3-0 Header__QuestionButton-sc-17b1not-3 mvcff kNOatn bold'><b style='color:red;'>説</b></button></a>←插件使用说明");
 
    $('body').on('click',"#save",function()
    {
        //$('.jhinQ path').attr('d','M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z')
        download_txt('MolluTalkSave.html',$('.iBfcuf').html());//生成专用存档
    });
    $('body').on('click',"#load",function()
    {
		$("#savefile").click()//读取专用存档
    });
    $("#savefile").change(function()
    {
        var file = this.files[0];
        var reader=new FileReader();
        reader.readAsText(file);
        reader.onload = function(e)
        {
            //var result=$(".bIcduz");
            //result.innerHTML = this.result;
            $(".iBfcuf").html(this.result);
            alert("若未显示或显示异常，请让老师和学生各说句话即可正常显示");
        }
    });
    $('body').on('click',"#help",function()
    {
        alert("此版本为测试版，带来新功能的同时也会带来各种各样的使用问题，目前正在不断完善中\n当前功能支持人物自定义，生成读取本插件专用存档（不完善，有BUG）");
    });
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
            $($(".eLDbih")[img]).attr('src',imgurl);
        };
    });
    $("body").on('click',".eLDbih",function()
    {
        //$("#img_upload_file1").click();
        img = $(".eLDbih").index($(this));
        $("#up").click()
    });
    $("body").on('click',".jRPwkT span:not(.fWynih)",function()
                                        {
        $(this).attr("hidden","hidden");
        $(this).before("<input value='"+$(this).text()+"'><button class='mingzi'>确定修改</button>");
    });
    $("body").on('click',".mingzi",function()
    {
        text = $(this).siblings("input").val();
        if(jQuery.trim(text) == 0)text = $(this).siblings("span").text();
        $(this).siblings("span").removeAttr('hidden').text(text);
        $(this).siblings("input").remove();
        $(this).remove();
 
    });
    $("body").on('click',".heJhGb .medium",function()
    {
        $(this).attr("hidden","hidden");
        $(this).before("<input value='"+$(this).text()+"'><button class='jiban'>确定修改</button>");
    });
    $("body").on('click',".jiban",function()
    {
        text = $(this).siblings("input").val();
        if(jQuery.trim(text) == 0)text = $(this).siblings("button").text();
        $(this).siblings("button").removeAttr('hidden').text(text);
        $(this).siblings("input").remove();
        $(this).remove();
    });
 
    // Your code here...
})();