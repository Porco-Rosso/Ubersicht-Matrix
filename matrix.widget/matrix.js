// # For use with Übersicht ==> http://tracesof.net/uebersicht/
// # Coded by Porco-Rosso ==> https://github.com/Porco-Rosso
// # from Stereostance.com
// # v1.0.0
// # GNU GPL V2

command: "",

refreshFrequency: 138000,

render: function (output) {
  return "<iframe width=\"1880\" height=\"1250\" src=\"matrix.widget/Matrix.html\" frameborder=\"0\" allowfullscreen></iframe>";
},

// Adjust the opacity value if you would still like to see your wallpaper behind the visualization
style: "        \n\
  top: 0px     \n\
  left: 0px    \n\
  z-index: -100 \n\
  opacity: 0.5 \n\
"
