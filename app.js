var friends = ['Austin', 'Kaleb', 'Isaac', 'Brandon', 'Peyton'];

let containerDiv = document.createElement('div');
containerDiv.className = "container";
document.body.appendChild(containerDiv);

let rowDiv = document.createElement('div');
rowDiv.className += "row";
containerDiv.appendChild(rowDiv);

let btnDiv = document.createElement('div');
btnDiv.className += 'col d-flex justify-content-center';
rowDiv.appendChild(btnDiv);

let btn = document.createElement('button');
btn.textContent = "Sing!";
btn.type = "button";
btn.className += "btn btn-light my-5";
btnDiv.appendChild(btn);

btn.addEventListener('click', function() {
    for(const friend of friends) {
        const friendsDiv = document.createElement('div');
        friendsDiv.className = "friend my-2 py-5";
        document.body.appendChild(friendsDiv);
    
        const h3 = document.createElement('h3');
        h3.className += "h3"
        h3.textContent = friend;
        friendsDiv.appendChild(h3);

        song();
    
        // for(c = 1; c < 100; c++) {

        // }
        function song() {                
                for(var j = 99; j > 0; j--){
                    if(j === 1) {
                        var p1 = document.createElement('p');
                        p1.textContent = (j + " line of code in the file, " + j + " line of code; "+ friend + " strikes one out, clears it all out, no more lines of code in the file.")
                        friendsDiv.appendChild(p1);
                    } else {
                        if(j === 2) {
                            var p2 = document.createElement('p');
                            p2.textContent = (j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, 1 line of code in the file.");
                            friendsDiv.appendChild(p2);
                        }
                        else{
                            var paragraphMain = document.createElement('p');
                            paragraphMain.textContent = (j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file.");
                            friendsDiv.appendChild(paragraphMain);
                        }
                    }
                }
            }
        }
})