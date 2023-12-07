const baseUrl = "https://hair-api-test.onrender.com/";

document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelector("#haircolors");
    e.addEventListener("change", () => {
      getHaircolorID(e.value);

    });
  });

const getHaircolorID = async function (value) {
  try {
    const haircolorIDs = await fetch(`${baseUrl}?color=${value}`);
    const haircolorIDsJSON = await haircolorIDs.json();

    Object.keys(haircolorIDsJSON).forEach(async (key,value) =>{
      try{
      const hairResponse = await fetch(`${baseUrl}hair/:${haircolorIDsJSON[key]}`)
      const hairResponseJSON = await hairResponse.json(); 
      const style = hairResponseJSON.style;

      console.log(style)
    document.querySelector('.output').textContent = style;


      }catch{
        console.log("ERROR")
      }
      });

  } catch {
    console.log("error");
  }

  
};

