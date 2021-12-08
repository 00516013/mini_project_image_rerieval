
var request = new XMLHttpRequest()
document.cookie="SameSite=None; Secure"
request.open('GET', 'https://reqres.in/api/users?page=2', true)
request.onload = function () {
  var input_data = JSON.parse(this.response)
  var arr= input_data.data
  console.log(arr)
  
  if(request.status >=200 && request.status <400){
    var parent=document.getElementById('root');
    parent.setAttribute('class','parent')
    parent.innerHTML=''
  
    for(var i=0;i<arr.length;i++){
      var container=document.createElement('div');
      container.setAttribute('class','card')
      container.innerHTML=''
      var name_div = document.createElement('div')
      name_div.setAttribute('class','name_div')
      var name = document.createElement('h1')
      var name_value=arr[i]['first_name']
      name.textContent=name_value;
      name_div.appendChild(name)

      var img = document.createElement('img')
      img.src = arr[i]['avatar'] 
      console.log(arr[i]['first_name'])
      container.appendChild(img)
      container.appendChild(name_div)
      parent.appendChild(container)
    };
  }
  else{
    console.log('ErrOr')
  }
}
request.send()



//working code 

// var request = new XMLHttpRequest()
// document.cookie="SameSite=None; Secure"
// request.open('GET', 'https://reqres.in/api/users?page=2', true)
// request.onload = function () {
//   var input_data = JSON.parse(this.response)
//   var arr= input_data.data
//   console.log(arr)
  
//   if(request.status >=200 && request.status <400){
//     var parent=document.getElementById('root');
//     parent.innerHTML=''
  
//     for(var i=0;i<arr.length;i++){
//       var container=document.createElement('div');
//       container.innerHTML=''
//       var name = document.createElement('div')
//       name.innerHTML=arr[i]['first_name']
//       var img = document.createElement('img')
//       img.src = arr[i]['avatar'] 
//       console.log(arr[i]['first_name'])
//       container.appendChild(img)
//       container.appendChild(name)
//       parent.appendChild(container)
//     };
//   }
//   else{
//     console.log('ErrOr')
//   }
// }
// request.send()
