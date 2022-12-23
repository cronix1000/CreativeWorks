import './App.css';
import '.'
//import from the api folder


var Simplex = require('perlin-simplex')
var simplex = new Simplex()

function CreateCharacter() {
    async function OnRequestRaces() {
        //call the GenerateRaces function from the GenerateRaces.js
        const response = fetch('https://www.dnd5eapi.co/api/races')
            .then(res => res.json())
            .catch(err => { throw err });
        return response;
    }

    var raceSelection = document.getElementById("race");
    var options = OnRequestRaces();

    var races;

    options.then(races)
    console.log(races)


    //for (var i = 0; i < options.length; i++) {
    //    var opt = options[4][i].name;
    //    var el = document.createElement("option");
    //    el.textContent = opt;
    //    el.value = opt;
    //    raceSelection.appendChild(el);
    //}
  return (
      <div className="CreateCharacter">
          <select id="race">
              <option>Choose a race</option>
          </select>
       
    </div>
  );
}

export default CreateCharacter;
