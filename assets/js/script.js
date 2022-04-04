// date in the header
$("#currentDay")
.text(moment().format('MMMM DD, YYYY'));


// retrieve class with hours and change to past present or future using css
$(".hour").each(function(){
    var blockTime = parseInt($(this).attr("id"));
    //console.log(this);
    //console.log($(".hour"))

    // current hour
    var hourNow = moment().hour();
    //console.log(hourNow)

    // get item from local storage
    var textToDo = localStorage.getItem(blockTime);

    if(hourNow === blockTime) {
        $(this).next().addClass("present").text(textToDo);
    }
    else if (hourNow < blockTime) {
        $(this).next().addClass("future").text(textToDo);
    }
    else if (hourNow > blockTime) {
        $(this).next().addClass("past").text(textToDo);
    }

    console.log(blockTime);
});


// save to local storage

function saveToStorage(){
    var textToDo = $(this).prev().val();
    //console.log(this);

    var blockTime = $(this).prev().prev().attr("id");
    //console.log(this);
    localStorage.setItem(blockTime, textToDo);
};

$(".saveBtn").on("click", saveToStorage);