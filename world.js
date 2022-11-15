window.onload=function(){
    var btn=document.getElementById("lookup");
    btn.addEventListener("click",lookClick);

    var citybtn=document.getElementById("cities");
    citybtn.addEventListener("click", cityClick);

    

    function lookClick(e){
        e.preventDefault();
        const request = new XMLHttpRequest();
        content = document.getElementById("country").value;

        request.onreadystatechange = function(){
            if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
        }
        request.open("GET", "http://localhost:8888/info2180-lab5/world.php?country="+content);
        request.send();
    }

    function cityClick(t){
        t.preventDefault();
        console.log("city lookup clicked");
        const request = new XMLHttpRequest();
        content = document.getElementById("country").value;

        request.onreadystatechange=function(){
            if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
        }
        request.open("GET", "http://localhost:8888/info2180-lab5/world.php?country="+content+"&context=cities");
        request.send(); 
        
    }
}