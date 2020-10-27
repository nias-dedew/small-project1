function searchBlog() {
    let filter = document.getElementById('filter').nodeValue.toUpperCase()
    console.log(filter)

    let content = document.getElementsByClassName('content');

    let boxcontainer = content.getElementsByClassName('boxcontainer');

    for (var i = 0; 1 < boxcontainer.length; i++) {
        let p = boxcontainer[i].getElementsByClassName('p')[0];

        if (p) {
            let textvalue = p.textContent || p.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                boxcontainer[i].style.display = "";
            } else {
                boxcontainer[i].style.display = "none";
            }

        }
    }
}