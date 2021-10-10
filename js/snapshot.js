$(document).ready(function(){

    var img_arr=[
        ["cont_01.jpg"],["cont_02.jpg"],["cont_03.jpg"],["cont_04.jpg"],
        ["cont_05.jpg"],["cont_06.jpg"],["cont_07.jpg"],["cont_08.jpg"],
        ["cont_09.jpg"],["cont_10.jpg"],["cont_11.jpg"],["cont_12.jpg"],
        ["cont_13.jpg"],["cont_14.jpg"],["cont_15.jpg"],["cont_16.jpg"],
        ["cont_17.jpg"],["cont_18.jpg"],["cont_19.jpg"],["cont_20.jpg"],
    ];
    for(i in img_arr){
        $(".cont .img_part").append(` <img src="./img/cont_01.jpg" alt="">`);
  }
    $(".cont .img_part img").each(function(index){
        $(this).attr("src","./img/"+img_arr[index][0]);
        
    });

    $(".cont .img_part img").eq(5).nextAll().hide();
    
    $(".cont button").click(function(){
        $(".cont .img_part img").show();
        $(this).hide();
    });
});