async function bar() {
    const apiFetch = await fetch("https://www.anapioficeandfire.com/api/books");
    const apiFetch1 = await apiFetch.json();

//     console.log(apiFetch1);

    let Books = apiFetch1

    let container = document.createElement("div");
    container.setAttribute("class", "container");

    let row = document.createElement("div");
    row.setAttribute("class", "row");

    container.append(row);

    div1 = document.createElement("div")
    div1.setAttribute("class", 'heading')
    
    let head = document.createElement("header")
    head.innerText = "Books And Book Details"
    
    div1.append(head)
    document.body.append(div1);
    
    const searchData = document.createElement("div")
    searchData.setAttribute("class", "data")
    
    const div2 = document.createElement("div")
    div2.setAttribute("class", "ip")

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", "txt")
    input.setAttribute("placeholder", "Enter  a Number 1-10")

    div2.append(input)

    document.body.append(div2);

    const button = document.createElement("button")
    button.setAttribute("type", "submit")
    button.classList.add("btn", "btn-primary")
    button.innerText = "Enter"

    searchData.append(button)

    document.body.append(searchData)


    for (let i = 0; i < Books.length; i++) {

        console.log(Books[i]);

        //Can't fetch all links for characters only few names are appear in console so i skip the characters

        //   for (let i = 0; i < Books.length; i++) {
        //     const chara = await fetch(Books[i].povCharacters[i]);
        //     const chara1 = await chara.json();
        //     const name = chara1.name;
        //     console.log(chara1);
        //   }

        const bookNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        row.innerHTML += `<div class="col-sm-4" id="#${bookNo[i]}">
          <div class="card border-primary mb-3" style="max-width: 30emb;">
            <div class="card-header">Book No ${bookNo[i]}: </div>
            <p >Name: ${Books[i].name}</p>
            <p>ISBN: ${Books[i].isbn}</p>
            <p>No.0f.Pages: ${Books[i].numberOfPages}</p>
            <p>Authors: ${Books[i].authors}</p>
            <p>Publisher: ${Books[i].publisher}</p>
            <p>Released on: ${Books[i].released}</p>
            
          </div>
        </div>`;

    }

    document.body.append(container);

    button.addEventListener("click", () => {
try{
        var ele = document.getElementById("txt").value;
        let No = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        if (isNaN(ele)) {
            alert('Enter a valid number');
            
        } else if (ele === "") {
            alert("Enter a number");
            
        } else if (ele > 10) {
            alert("Enter a number below 10");
            
             } else if(ele < 1) {
            alert("Enter a Number between 1 - 10")
             
        } else {
            
            // Scroll to the element with the specified ID[ line.no:92-94;Ref :online]
            
            const element = document.getElementById(`#${No[ele - 1]}`);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });

                // Change the color of the card-header element
                
                const cardHeader = element.querySelector(".card-header");
                if (cardHeader) {
                    cardHeader.style.color = "black";
                    

                    const paragraphs = element.querySelectorAll('p')
                    if (paragraphs) {

                        //if we use queryselectorAll 
                        //we need to  use forEach or for loops to access every elements in that tag

                        paragraphs.forEach((paragraph) => {

                            paragraph.style.color = "grey"
                        })
                    }
                }
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
    });



}

bar();
