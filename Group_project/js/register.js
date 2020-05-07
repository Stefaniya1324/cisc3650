function submitForm()
{
	alert("Sign Up Successfully!");
	window.open("index.html");
}

var isValid;
// keep update the passwords status between two input every 1 second 
function CheckPW()
{

	var prev = document.getElementById("pw").value;
	var curr = document.getElementById("re_pw").value;
	var currText = document.getElementById("re_pw");

	if(prev == curr)
	{
		currText.style.borderColor = 'black';
		isValid = true;
	}
	else
	{
		currText.style.borderColor = 'red';
		isValid = false;
	}

	// if text field is empty then change to defualt color 
	if(currText == "")
	{
		currText.style.borderColor = 'black';
	}

}


var isEmailValid;

// make sure the email field has correct email format 
function ValidateEmail() 
{

	var email = document.getElementById("EMAIL");
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 	if (email.value.match(mailformat))
 	{
 	   isEmailValid = true;
 	   email.style.borderColor = 'black';
 	}
  	else
  	{
  		isEmailValid = false;
  		email.style.borderColor = 'red';
  	}

  	// if text field is empty then change to defualt color 

  	if(email.value == "")
  	{
  		email.style.borderColor = 'black';
  	}
}


// check if the name input has a value in it or not 
var hasName = false;

function checkName()
{
	var name = document.getElementById("NAME");

	if(name.value != "")
	{
		hasName = true;
		name.style.borderColor = 'black';
	}
	else
	{
		name.style.borderColor = 'red';
	}
}


// check the checkbox is check or not 
var isCheck = false;

function checkBox()
{
	var checking = document.getElementById("check");

	if(checking.checked == true)
	{
		isCheck = true;
	}

}


// check the form every 1 sec to see if all fields in form are filled and correct
function updateStatus()
{
	 setInterval(CheckAll, 1000);
}

// each time call this function, check every single field, if one of input is incorrect or empty, the button is disable 
function CheckAll()
{

	var inputs = document.getElementsByTagName("input");
	var selects = document.getElementsByTagName("select");

	var button = document.getElementById("submit_button");

	var valid = true;

	//loop that check every input has value and value is the correct
	for(var i=0; i<inputs.length; i++)
	{
		if(!inputs[i].value || isValid == false || isEmailValid == false || hasName == false || isCheck == false)
		{
			valid = false;
		}
	}

	// it checks if the select item is select or not 
	for(var j=0; j<selects.length; j++)
	{	
		// mean no select is choose in the drop-down list
		if(selects[j].selectedIndex == -1)
		{
			valid = false;
		}
	}

	
	// change the button color, it gives user a visual perspective of correct form or not
	
	if(valid)
	{
		button.disabled = false;

		button.style.backgroundColor  = "#1c8adb";
		button.style.color = "#fff";

	}
	else
	{
		button.disabled = true;

		button.style.color = "#fff";

		button.style.backgroundColor = "#808080";
	}
}

 