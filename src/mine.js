function getData() {
    $.ajax({ 
        type: 'GET', 
        url: 'http://example/functions.php', 
        data: { get_param: 'value' }, 
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });
}

