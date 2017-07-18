class Initiative {
    constructor(id, title, desc, imgpath) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.imgpath = imgpath;
        this.key = allInitiatives.length;
        allInitiatives.push(this);
    }
}

function addInitiative(init) {
    var initHTML = "<div class='init' id='" + init.id + "Init' key=" + init.key + "><h1 id='initTitle'>" + init.title + "</h1><br>";
    initHTML += "<img width='25%' src='" + init.imgpath + "'>";
    initHTML += "<div id='initDescWrapper'><div id='initDesc'>" + init.desc + "</div></div>";
    initHTML += "</div>";
    $('.initiatives').append(initHTML);
}

function displayInfo(initClicked) {
    $.fancybox({
        href: '#initPopup',
        width: 700,
        autoDimensions: false,
        autoSize: false,
        afterLoad: function() {
            this.content = "";
            this.inner.prepend("<center><h1 class='fancyTitle'>" + initClicked.title + "</h1></center>");
        },
        afterShow: function() {
        }
    });
}

//capitalize first letter of string
function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var allInitiatives = [];
cup = new Initiative("cup", "Small Business Package", "25 EMGChairs<br><br><span style='font-size:50px;'>$199.99</span><br>20% discount", "img/chair1.png");
chapters = new Initiative("chapters", "Medium Business Package", "100 EMGChairs<br><br><span style='font-size:50px;'>$749.99</span><br>25% discount", "img/chair2.png");
pitch = new Initiative("pitch", "Large Business Package", "500 EMGChairs<br><br><span style='font-size:50px;'>$3499.99</span><br>30% discount", "img/chair3.png");

for (i = 0; i < allInitiatives.length; i++) {
    addInitiative(allInitiatives[i]);
}

$('.init').on("click", function(e) {
    var initClicked = allInitiatives[$(e.currentTarget).attr("key")];
    displayInfo(initClicked);
});
