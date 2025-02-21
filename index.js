var celcious=document.getElementById("cel");
        var Fahrenheit=document.getElementById("fah")

        celcious.addEventListener('input', function(){
             let c =this.value;
             let f =(c * 9/5) + 32;
             if(!Number.isInteger(f)){
                 f =f.toFixed(4);
             }
             fah.value =f;
        });

        Fahrenheit.addEventListener('input', function(){
            let f =this.value;
            let c = ((f - 32) * 5/9);
            if (!Number.isInteger(f)) {
                 c = c.toFixed(4);
                }
            cel.value =c;
        });