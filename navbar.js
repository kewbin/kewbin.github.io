$.ajax({
    'async': false,
    'global': true,
    'url': "../navbar.json",
    'dataType': "json",
    'success': function (data) {
        for(page in data){
            console.log(data[page]['slug'])
            console.log(window.location.pathname.replaceAll('/',''))
            if(data[page]['slug'] === window.location.pathname.replaceAll('/','').replaceAll('index.html','')) {
                $("#navbar").append("<div class='selected'>"+data[page]["title"]+"</div>");
            } else {
                $("#navbar").append("<div><a href='../"+data[page]["slug"]+"'>"+data[page]["title"]+"</div>");
            }
        }
    }
});

