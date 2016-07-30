$(function() {

    $('.nav .search').on('click', function(e) {
        e.preventDefault();
        $('.nav .menu').addClass('searching');
        $('.search-box').addClass('hui');
        $('.search-chu .select .select-list li').addClass('list');
        $('.search-chu .select h3').addClass('list');
    })
    $('.search-box .cha').on('click', function() {
        $('.nav .menu').removeClass('searching');
        $('.search-box').removeClass('hui');
        $('.search-chu .select .select-list li').removeClass('list');
        $('.search-chu .select h3').removeClass('list');
    })
    $('.phone .menu').on('click', function() {
        $('.phone .menu .ph').toggleClass('he');
        $('.phone .menu .ps').toggleClass('he');
        $('.phone-box').toggleClass('xia');
        $('.phone .bag').toggleClass('you');
        $('.phone-box li').toggleClass('col');
    })

// banner循环：
  var img=$('.banner .banner-center .b-img');
  var moving=false;
  move=function(n,dir){
    moving=true
    var active=$('.banner .banner-center .active');
    active.addClass(dir).delay(1000).queue(function(){
      moving=false;
      $(this).removeClass('active').removeClass(dir).dequeue();
    })
    var op=(dir==='left')?'right':'left';
    $(n).addClass(op);
    $(n).get(0).offsetWidth;
    $(n).removeClass(op).addClass('active');
    $('.zhishi li').removeClass('first').eq(img.index($(n))).addClass('first')
  }
  var you=$('.banner .banner-center .you');
  var zuo=$('.banner .banner-center .zuo');
  you.on('click',function(){
      if(moving) return
      var active=$('.banner .banner-center .active');
      if(active.next().length){
        var n=active.next();
      }else{
        var n=img.eq(0);
      }
      move(n,'left')
  })
  zuo.on('click',function(){
      if(moving) return
      var active=$('.banner .banner-center .active');
      if(active.prev().length){
        var n=active.prev();
      }else{
        var n=img.eq(-1);
      }
      move(n,'right')
  })
 $('.zhishi li').on('click',function(e){
   e.preventDefault();
   if($(this).index()==img.index($(".banner .banner-center .active"))){
       return
   }
   if($(this).index()>img.index($(".banner .banner-center .active"))){
     d='left';
   }else{
     d='right';
   }
   var n=img.eq($(this).index());
   move(n,d)
   $('.zhishi li').removeClass('first');
   $(this).addClass('first');
 })
 var t=setInterval(zidong,3000);
 function zidong(){
   you.trigger('click');
 }
 $('.banner .banner-center').hover(function(){
   clearInterval(t)
   $('.banner .banner-center .zuo').css({
     display:"block"
   })
   $('.banner .banner-center .you').css({
     display:"block"
   })
 },function(){
   t=setInterval(zidong,3000);
   $('.banner .banner-center .zuo').css({
     display:"none"
   })
   $('.banner .banner-center .you').css({
     display:"none"
   })
 })
// footer部分:
   $('.footer .fr2-content h3').on('click',function(){
        $(this).next('.menu').toggleClass('list');
   })



})
