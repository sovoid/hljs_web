$(document).ready(function() {
  console.log("hello world");

  hljs.initHighlightingOnLoad();

  setTimeout(function() {
    var syntax_background = $("code").css("background-color");
    $("body").css("background-color", syntax_background);
  }, 100);

  $("#bioDiv").hide();
  var bio = false;
  $("body").on("click", "#bio", function() {
    if (bio) {
      bio = false;
      $('.d1').toggle();
      $("#bioDiv").fadeOut();
    } else {
      bio = true;
      $('.d1').toggle();
      $("#bioDiv").fadeIn();
    }
  });

  $("#skillsDiv").hide();
  var skills = false;
  $("body").on("click", "#skills", function() {
    if (skills) {
      skills = false;
      $('.d2').toggle();
      $("#skillsDiv").fadeOut();
    } else {
      skills = true;
      $('.d2').toggle();
      $("#skillsDiv").fadeIn();
    }
  });


  // $('.info').hide();
  // $("body").on("mouseover", ".pro", function() {
  //     $(this).next().fadeIn();
  //   });

  // $("body").on("mouseleave", ".pro", function() {
  //   $(this).next().fadeOut();
  // });



  var schemes = [
    "androidstudio.css",
    "atelier-estuary-dark.css",
    "atelier-forest-light.css",
    "atelier-forest-dark.css",
    "dracula.css",
    "hopscotch.css",
    "ir-black.css",
    "monokai-sublime.css",
    "obsidian.css",
    "paraiso-dark.css",
    "tomorrow-night.css",
    "vs.css",
    "xt-256.css",
    "zenburn.css"
  ];

  var backgrounds = [
    "#282b2e",
    "#22221b",
    "#f1efee",
    "#1b1918",
    "#282a36",
    "#322931",
    "#000000",
    "#23241f",
    "#282b2e",
    "#2f1e2e",
    "#1d1f21",
    "#ffffff",
    "#f0f0f0",
    "#3f3f3f"
  ]
  var current = 0;
  $("body").on("click", "#solarize", function() {
    current = (current + 1) % schemes.length;
    var theme = schemes[current];
    var cssFile = `resources/styles/${schemes[current]}`;
    var oldlink = document.getElementById("rotate");
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("id", "rotate");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    $("body").css("background-color", backgrounds[current]);
    document
      .getElementsByTagName("head")
      .item(0)
      .replaceChild(newlink, oldlink);

    $('#theme').html(schemes[current]);
  });

  /* SOMETIMES I LIKE TO LIE ON THE FLOOR AND PRETEND I'M A CARROT */
});
