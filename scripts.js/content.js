function showContent(contentId) {
    var contentDivs = document.querySelectorAll('[id^="content"]');
    contentDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    var selectedDiv = document.getElementById(contentId);
    selectedDiv.style.display = 'block';
}