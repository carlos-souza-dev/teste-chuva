
var $more = document.querySelector(".more");
var $less = document.querySelector(".less");
var $resumText = document.querySelector(".resum-text");
var $resumContent = document.querySelector(".resum-show-more");

// Comentários 
var $coment = document.querySelector("#content-expand");
var $comentExpanded = document.querySelector(".content-expanded");
var $allComents = document.querySelector("#all-coments");


$more.addEventListener("click", function(){
    
    $resumText.classList.toggle("hide-all");
    $resumContent.classList.toggle("show-all");
    // $more.classList.toggle("hide-all")
})

$less.addEventListener("click", function() {
    $resumText.classList.toggle("hide-all");
    $resumContent.classList.toggle("show-all");
})

$coment.addEventListener("click", function() {
    $coment.classList.toggle("hide-all")
    $comentExpanded.classList.add("show-all")
    $comentExpanded.classList.remove("hide-all")
})

$allComents.addEventListener("click", function() {
    $coment.classList.toggle("hide-all")
    $comentExpanded.classList.remove("show-all")
    $comentExpanded.classList.add("hide-all")
})

// Criar tópico
var $createTopic = document.querySelector("#btn-new-topic");
var $newTopic = document.querySelector(".new-topic");
var $editTopic = document.querySelector(".edit-topic");
var $btnSubmit = document.querySelector("#btn-submit");
var $topicSave = document.querySelector(".article-finished");
var $btnCreate = document.querySelector("#finished-btn-create");
var $topicTitle = document.querySelector("#topic-title");
var $topicText = document.querySelector("#topic-text");
var $title = document.querySelector("#topic-save-h2");
var $text = document.querySelector("#topic-save-p");
var $btnEdit = document.querySelector("#btn-adit-topic");

$createTopic.addEventListener("click", function() {

    alert(`Em "novo tópico" preencha os campos, por gentileza.`)

    $newTopic.classList.toggle("hide-all");
    $editTopic.classList.remove("hide-all");
    $editTopic.classList.add("show-all");
})

$btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();

    $editTopic.classList.remove("show-all");
    $editTopic.classList.add("hide-all");
    $topicSave.classList.add("show-all");
    
    $title.innerText = `${$topicTitle.value}`;
    $text.innerText = `${$topicText.value}`;
    
})

$btnCreate.addEventListener("click", function() {
    $editTopic.classList.remove("hide-all");
    $editTopic.classList.add("show-all");
    $topicSave.classList.remove("show-all");

    clear();
});

$btnEdit.addEventListener("click", function() {
    $editTopic.classList.remove("hide-all");
    $editTopic.classList.add("show-all");
    $topicSave.classList.remove("show-all");
});

function clear() {
    $topicTitle.value = "";
    $topicText.value = "";
    console.log("limpa")
}