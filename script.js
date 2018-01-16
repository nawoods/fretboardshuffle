function newNote() {
  var noteNames = { 
    0:  ["C", "B sharp"],
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
  var stringNames = { 
    1: ["High E"],
    2: ["B"],
    3: ["G"],
    4: ["D"],
    5: ["A"],
    6: ["Low E"]
  }; 
  var stringNotes = {
    1: 4,
    2: 11,
    3: 7,
    4: 2,
    5: 9,
    6: 4
  };
  var dotLocsX = {
    0:  "591px",
    1:  "535px",
    2:  "473px",
    3:  "414px",
    4:  "359px",
    5:  "306px",
    6:  "257px",
    7:  "211px",
    8:  "168px",
    9:  "126px",
    10: "87px",
    11: "50px"
  };
  var dotLocsY = {
    1: "81px",
    2: "67px",
    3: "52px",
    4: "37px",
    5: "22px",
    6: "8px"
  };
	      
  var note = Math.floor(Math.random() * 12);
  console.log(note);
  var string = Math.floor(Math.random() * 6) + 1;
  console.log(string);
  console.log(stringNotes[string]);
  var fret = (note - stringNotes[string]) % 12;
  if (fret < 0) { fret = fret + 12 };
  console.log(fret);
  var dotLocX = dotLocsX[fret];
  var dotLocY = dotLocsY[string];

  $("#note").html("Note: " + noteNames[note][Math.floor(Math.random() * 2)]);
  $("#string").html("String: " + stringNames[string]);

  $("#greendot").css("opacity", 0);
  $("#greendot").css("left", dotLocX);
  $("#greendot").css("top", dotLocY);
};
  
$(document).ready(function() {
  var dotVisibility = 0;
  $("#newnote").on("click", function() {
    dotVisibility = 0;
    $("#dottoggle").html("Show");
    newNote();
  });
  $("#dottoggle").on("click", function() {
    if (dotVisibility === 1) {
      dotVisibility = 0;
      $("#greendot").css("opacity", 0);
      $("#dottoggle").html("Show");
    } else {
      dotVisibility = 1;
      $("#greendot").css("opacity", 1);
      $("#dottoggle").html("Hide");
    };
  });
      
});
