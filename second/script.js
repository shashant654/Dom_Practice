let yesBtn = document.getElementById('yes')
let noBtn = document.getElementById('no')

yesBtn.addEventListener('click', submit)
noBtn.addEventListener('click', submit)


noBtn.addEventListener('mouseover' , function() {
          noBtn.innerText = 'Yes';
          yesBtn.innerText = 'No'
})

noBtn.addEventListener('mouseout' , function() {
          noBtn.innerText = 'No';
          yesBtn.innerText = 'Yes'
})




function submit(){
          window.alert("Congratulations you got a Date with me")
}