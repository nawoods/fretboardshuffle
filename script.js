function newNote() {
  noteNames = { 0:  ["C", "B sharp"],
	        1:  ["C sharp", "D flat"],
		2:  ["D", "D"],
		3:  ["D sharp", "E flat"],
		4:  ["E", "F flat"],
		5:  ["F", "E sharp"],
	        6:  ["F sharp", "G flat"],
		7:  ["G", "G"],
		8:  ["G sharp", "A flat"],
		9:  ["A", "A"],
		10: ["A sharp", "B flat"],
		11: ["B", "C flat"]
  };
  stringNames = { 1: ["High E"],
	          2: ["B"],
		  3: ["G"],
		  4: ["D"],
		  5: ["A"],
		  6: ["Low E"]
  }; 
  dotLocsX = { 0:  "591px";
  	       1:  "525px";
               2:  "473px";
               3:  "414px";
               4:  "359px";
               5:  "306px";
               6:  "257px";
               7:  "211px";
               8:  "168px";
               9:  "126px";
               10: "87px";
               11: "50px"
  };
  dotLocsY = { 1: "81px";
	       2: "67px";
	       3: "52px";
	       4: "37px";
	       5: "22px";
	       6: "8px";
	      
  note = Math.floor(Math.random() * 12);
  string = Math.floor(Math.random() * 6) + 1;
  $("#note").html("Note: " + noteNames[note][Math.floor(Math.random() * 2)]);
  $("#string").html("String: " + stringNames[string]);
}
  
$(document).ready(function() {
  $("#newnote").on("click", newNote);
});
