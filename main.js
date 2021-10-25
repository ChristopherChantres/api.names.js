// const user_chosen_name = document.getElementById("submit");
// alert(user_chosen_name);

// btn = document.getElementById("pressme").addEventListener("click", function check() {
//     if (btn == true) {
//         btn.question
//     }
// });

var btn = document.getElementById("pressme");
btn.onclick = function asking() {
    const question = prompt("Ingresa tu nombre: ");
    validate(question)
}


function validate(question) {
    if (question == null) {
        asking();
    } else if (question == "") {
        asking();
    } else {

        async function getCountry() {
            const answer = await fetch("https://api.nationalize.io/?name=" + question);
        
            if (!answer.ok) {
                let oops = ("404 no encontré nada");
                alert(oops);
                document.getElementById("message").innerHTML = `No existe la URL`;
                throw new Error(oops);
        
            }
            
            const name = answer.json();
            return name;
        }
        
        function showName(n) {
            document.getElementById("message").innerHTML = `Tu nombre ` + `"` + question + `"` + ` es de ` + n.country[0].country_id + `, con una probabilidad del ` + n.country[0].probability;
            document.getElementById("redirecting").innerHTML = `Redireccionando al país de origen ...`;

            setTimeout( function() {
                window.location.href = "https://www.google.com/search?q=" + n.country[0].country_id +"+country+code&source=hp&ei=Ss11YeaPL5P8wAPxy4n4CQ&iflsig=ALs-wAMAAAAAYXXbWtYdpC1VsurtdBTHxBx-8OhvkzGS&ved=0ahUKEwjm3Iie_OPzAhUTPnAKHfFlAp8Q4dUDCAY&uact=5&oq=CV+country+code&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEBM6DgguEIAEEMcBENEDEJMCOgsILhCABBDHARCjAjoLCC4QgAQQxwEQrwE6BQgAEIAEOgUILhCABDoOCC4QgAQQxwEQowIQkwI6CAguEIAEEJMCOgsILhCABBDHARDRAzoGCAAQFhAeOggIABAWEB4QEzoKCAAQFhAKEB4QEzoFCCEQoAE6CAgAEBYQChAeUJQjWNJyYOB0aA9wAHgAgAGfAYgBnhOSAQQ2LjE2mAEAoAEBsAEA&sclient=gws-wiz";
                alert("Tu nombre " + '"' + question + '"' + " es de:");
            }, 7000);
            


            // window.location.href = "https://www.google.com/search?q=" + n.country[0].country_id +"+country+code&source=hp&ei=Ss11YeaPL5P8wAPxy4n4CQ&iflsig=ALs-wAMAAAAAYXXbWtYdpC1VsurtdBTHxBx-8OhvkzGS&ved=0ahUKEwjm3Iie_OPzAhUTPnAKHfFlAp8Q4dUDCAY&uact=5&oq=CV+country+code&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEBM6DgguEIAEEMcBENEDEJMCOgsILhCABBDHARCjAjoLCC4QgAQQxwEQrwE6BQgAEIAEOgUILhCABDoOCC4QgAQQxwEQowIQkwI6CAguEIAEEJMCOgsILhCABBDHARDRAzoGCAAQFhAeOggIABAWEB4QEzoKCAAQFhAKEB4QEzoFCCEQoAE6CAgAEBYQChAeUJQjWNJyYOB0aA9wAHgAgAGfAYgBnhOSAQQ2LjE2mAEAoAEBsAEA&sclient=gws-wiz";

            // var countryCode = fetch("https://www.google.com/search?q=" + n.country[0].country_id +"+country+code&source=hp&ei=Ss11YeaPL5P8wAPxy4n4CQ&iflsig=ALs-wAMAAAAAYXXbWtYdpC1VsurtdBTHxBx-8OhvkzGS&ved=0ahUKEwjm3Iie_OPzAhUTPnAKHfFlAp8Q4dUDCAY&uact=5&oq=CV+country+code&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEBM6DgguEIAEEMcBENEDEJMCOgsILhCABBDHARCjAjoLCC4QgAQQxwEQrwE6BQgAEIAEOgUILhCABDoOCC4QgAQQxwEQowIQkwI6CAguEIAEEJMCOgsILhCABBDHARDRAzoGCAAQFhAeOggIABAWEB4QEzoKCAAQFhAKEB4QEzoFCCEQoAE6CAgAEBYQChAeUJQjWNJyYOB0aA9wAHgAgAGfAYgBnhOSAQQ2LjE2mAEAoAEBsAEA&sclient=gws-wiz");
        }


        getCountry().then(showName);
    }
}

asking()
