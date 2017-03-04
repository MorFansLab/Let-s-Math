function GetRandomNum(Min,Max){
  Max = parseInt(Max);
  Min = parseInt(Min);
  var Range = Max - Min;   
  var Rand = Math.random();   
  return(Min + Math.round(Rand * Range));   
}
function GetResult(First,Second,Operator){
  First = parseInt(First);
  Second = parseInt(Second);
  Operator = parseInt(Operator);
  var Result;
  switch(Operator){
    case 1:
      Result = null;
      Result = First + Second;
      break;
    case 2:
      Result = null;
      Result = First - Second;
      break;
    case 3:
      Result = null;
      Result = First * Second;
      break;
    case 4:
      Result = null;
      Result = First / Second;
      break;
      default:
      Result = 'Error';
  }
  return Result;
}
function Operation(op){
  switch(op){
    case 1:
      var c = GetResult(document.getElementById('Afirst').innerHTML,document.getElementById('Asecond').innerHTML,1);
      break;
    case 2:
      var c = GetResult(document.getElementById('Sfirst').innerHTML,document.getElementById('Ssecond').innerHTML,2);
      break;
    case 3:
      var c = GetResult(document.getElementById('Mfirst').innerHTML,document.getElementById('Msecond').innerHTML,3);
      break;
    case 4:
      var c = GetResult(document.getElementById('Dfirst').innerHTML,document.getElementById('Dsecond').innerHTML,4);   break;
    default:
      var c = 'Sorry，出现了点错误';
      break;
  }
  mdui.snackbar({
      message: '答案是：'+ c
    });
}
function CheckResult(op){
    switch(op){
      case 1:
       var a = parseInt(document.getElementById('Ainput').value);
       var b = GetResult(document.getElementById('Afirst').innerHTML,document.getElementById('Asecond').innerHTML,1);

       break;
      case 2:
       var a = parseInt(document.getElementById('Sinput').value);
       var b = GetResult(document.getElementById('Sfirst').innerHTML,document.getElementById('Ssecond').innerHTML,2);

       break;
      case 3:
       var a = parseInt(document.getElementById('Minput').value);
       var b = GetResult(document.getElementById('Mfirst').innerHTML,document.getElementById('Msecond').innerHTML,3);
       break;
      case 4:
       var a = parseInt(document.getElementById('Dinput').value);
       var b = GetResult(document.getElementById('Dfirst').innerHTML,document.getElementById('Dsecond').innerHTML,4);
       break;
    }
    if(a==b){
         var c = '恭喜你，答对了！';
       }else{
         var c = '答错了，再试试？';
       }
    mdui.snackbar({
      message: c,
      buttonText: '换题',
      onButtonClick: function(){
        GetRandom();
      }

    });
}
function GetRandom(){

  var Fmin = localStorage.Firstmin;
  var Fmax = localStorage.Firstmax;
  
  var Smin = localStorage.Secondmin;
  var Smax = localStorage.Secondmax;

  document.getElementById('Afirst').innerHTML= GetRandomNum(Fmin,Fmax);
  document.getElementById('Asecond').innerHTML= GetRandomNum(Smin,Smax);
  // document.getElementById('Sfirst').innerHTML= GetRandomNum(Fmin,Fmax);
  // document.getElementById('Ssecond').innerHTML= GetRandomNum(Smin,Smax);
  document.getElementById('Mfirst').innerHTML= GetRandomNum(Fmin,Fmax);
  document.getElementById('Msecond').innerHTML= GetRandomNum(Smin,Smax);
  var a;
  var b;
  do
  {
  a = GetRandomNum(Fmin,Fmax);
  b = GetRandomNum(Smin,Smax);
  }
  while (a-b < 0);
  document.getElementById('Sfirst').innerHTML= a;
  document.getElementById('Ssecond').innerHTML= b;

  do
  {
    do
    {
      a = GetRandomNum(Fmin,Fmax);
      b = GetRandomNum(Smin,Smax);
    }
    while (a%b != 0);
  }
  while(a-b<0);

  // do
  // {
  // a = GetRandomNum(Fmin,Fmax);
  // b = GetRandomNum(Smin,Smax);
  // }
  // while (a%b != 0);
  document.getElementById('Dfirst').innerHTML= a;
  document.getElementById('Dsecond').innerHTML= b;

}
function Readconf(){
  console.log('loaded');
  if (!localStorage.Firstmin)
  {
      localStorage.Firstmin=5;
  }else{
      document.getElementById('Fmin').value = localStorage.Firstmin;
  }
  if (!localStorage.Firstmax)
  {
    localStorage.Firstmax=900;
  }else{
    document.getElementById('Fmax').value = localStorage.Firstmax;
  }
  if (!localStorage.Secondmin)
  {
    localStorage.Secondmin=2;
  }else{
    document.getElementById('Smin').value = localStorage.Secondmin;
  }
  if (!localStorage.Secondmax)
  {
    localStorage.Secondmax=900;
  }else{
    document.getElementById('Smax').value = localStorage.Secondmax;
  }
}
function Saveconf(){
  console.log(localStorage.Firstmin);
  console.log(localStorage.Firstmax);
  console.log(localStorage.Secondmin);
  console.log(localStorage.Secondmax);
  var Fmin = document.getElementById('Fmin').value;
  var Fmax = document.getElementById('Fmax').value;
  var Smin = document.getElementById('Smin').value;
  var Smax = document.getElementById('Smax').value;
  if(document.getElementById('Fmin').value.length==0 || document.getElementById('Fmax').value.length==0 || document.getElementById('Smin').value.length==0 || document.getElementById('Smax').value.length==0 )
  {
    mdui.alert('抱歉，信息填写不完整！');
  }else{
    localStorage.Firstmin = Fmin;
    localStorage.Firstmax = Fmax;
    localStorage.Secondmin = Smin;
    localStorage.Secondmax = Smax;
  }
 
 

}