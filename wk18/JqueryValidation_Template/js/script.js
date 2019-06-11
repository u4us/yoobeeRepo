$(function(){
    //masking
    //https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html
    
    $('#income').mask('000,000,000,000,000.00', {reverse: true});

    //validation
    $('#signup').validate({
        rules: {
            //key: value
            username:{
                required: true,
                minlength: 3
            },
            password:{
                required: true,
                minlength: 5
            },
            password_confirmation:{
                //id/class of the password, not name
                equalTo: '#password',
            },
            email:{
                required: true,
                email: true
            },
            other:{
                //true false return value
                required: '#ethnicity_other:checked',
                minlength: 2
            },
            agree: 'required'
        },
        //if the rules are not met
        messages:{
            username:{
                required: 'username required',
                minlength: 'insufficient characters (min. 3)'
            },
            agree: '',
        },
        //el: element with the errors
        highlight: function(el){
            $(el).addClass('animated shake');
            $(el).one('animationend', function(){
                $(this).removeClass('animated shake');
            })
        },
    });
});