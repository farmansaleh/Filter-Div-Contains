/*
    author : @Farman Saleh
 	date   : January 20/2023
 	github : github.com/farmansaleh
**/

$("#search-question").keyup(function() {
    var filter, ques_list, questions, question, count=0;
    filter = this.value.toUpperCase();

    ques_list = $("#faq-question-list");
    questions = $(ques_list).children("div.card");
    
    for (i = 0; i < questions.length; i++) {
        question = $(questions[i]).children("div.card-header").children(" span.question").text().toUpperCase();
        
        if (question.indexOf(filter) > -1) {
            $(questions[i]).css("display","");
            count++;
        } else {
            $(questions[i]).css("display","none");
        }
    }
    
    if(count <= 0){
        $(ques_list).children("div.not-found").remove();
        $(ques_list).append($("<div class='not-found text-center'/>").append($("<span/>").addClass("text-dark font-weight-bolder h5").append("Question Not Found.")));
    }else{
        $(ques_list).children("div.not-found").remove();
    }
});