//Add Brew to DB
const brewSub = document.querySelector(".brewSub");

const createBrew = async () => {
    const url = "http://localhost:3010/create_breweries";
    const breweryName = document.querySelector(".brewName").value;
    const date = document.querySelector(".brewDate").value;
    const city = document.querySelector(".brewCity").value;
    const state = document.querySelector(".brewState").value;
  
    const brewData = {        
        breweryName,
        date,
        city,
        state,
    };
  
    const createBrew = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brewData),
    });
    if (createBrew.status === 200) {
        window.location.reload();
    }
};
//End Add Brew

//Add Beer
const beerSub = document.querySelector(".beerSub");

const createBeer = async () => {
    const url = "http://localhost:3010/create_beers";
    const beerName = document.querySelector(".beerName").value;
    const beerTyper = document.querySelector(".beerType").value;
    const maker = document.querySelector(".maker").value;

    const beerData = {
      beerName,
      beerTyper,
      maker,
    };

  const createBeer = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beerData),
  });
};
//End Add Beer

//Brew Read
const userBrewz = document.querySelector(".userBrewz");

const brewRead = async () => {
    const url = "http://localhost:3010/get_breweries";
    const brewData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json",}
    });
    const json = await brewData.json();
    for (const brew of json) {
        const breName = brew.breweryName;
        const breDate = brew.date;
        const brewCity = brew.city;
        const brewState = brew.State;
        const brewDiv = document.createElement("div");
        brewDiv.className = brewDiv;
        const userBrewName = document.createElement("h4");
        userBrewName.className = userBrewName;
        const userBrewDate = document.createElement("h4");
        userBrewDate.className = userBrewDate;
        const userBrewCity = document.createElement("h4");
        userBrewCity.className = userBrewCity;
        const userBrewState = document.createElement("h4");
        userBrewState.className = userBrewState;
        const deleteButton = document.createElement("button");
        deleteButton.className = `brewery-${brew.breweryName}`;
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteBrewery(brew.breweryName));
        userBrewName.innerHTML = `${breName}`;
        userBrewDate.innerHTML = `${breDate}`;
        userBrewCity.innerHTML = `${brewCity}`;
        userBrewState.innerHTML = `${brewState}`;
        brewDiv.append(userBrewName, userBrewDate, userBrewCity, userBrewState);
        userBrewz.append(brewDiv);
    }
};


// Delete Brew
    const deleteBrewery = async (breweryName) => {
      const url = `http://localhost:3010/delete_brew/${breweryName}`;
      console.log(url)

      const deleteBrewery = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (deleteBrewery.status === 200) {
        window.location.reload();
      }
  };
