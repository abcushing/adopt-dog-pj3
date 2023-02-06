// to query graphql 
import { useQuery } from "@apollo/client";
import BreedRow from "./BreedRow";
import { GET_BREEDS } from "../queries/breedQuery";
import { useState } from "react";

export default function SearchResults({ setBreed,setCurrent}) {
  // Starter object to find all breeds on load
  const starterObject = {
    category: ["Toy", "Hound", "Terrier", "Utility", "Pastoral", "Working"],

    exercise: [
      "Up to 30 minutes per day",
      "Up to 1 hour per day",
      "More than 2 hours per day",
    ],

    homeSize: ["Flat/ Apartment", "Large house", "Small house"],

    grooming: ["Every day", "More than once a week", "Once a week"]
  };
  //   different states for checkboxes
  var [findObject, setFindObject] = useState({});
  var [activityLevel, setActivityLevel] = useState([]);
  var [dogCategory, setDogCategory] = useState([]);
  var [house, setHouse] = useState([]);
  var [grooming, setGrooming] = useState([]);

  // query
  const { loading, error, data, refetch } = useQuery(GET_BREEDS, {
    variables: {
      // first query has no filters so you will get all dogs on load
      exercise: starterObject.exercise,
      category: starterObject.category,
      grooming: starterObject.grooming,
      homeSize: starterObject.homeSize,
    },
  });

  // hand a change in checkbox to dynamically create object
  const newChange = async (event) => {
    findObject = starterObject
    //T Handle check
    if (event.target.checked) {
      //* determing which section was checked
      if (event.target.name === "activity") {
        // add selected box to search array
        activityLevel.push(event.target.id);
        // set search array state
        setActivityLevel(activityLevel);
        // set property of "findObject" based on new array
        findObject.exercise = activityLevel;
        // set FindObject 
        setFindObject(findObject);
        //* determing which section was checked
      } else if (event.target.name === "category") {
        // add selected box to search array
        dogCategory.push(event.target.id);
        // set search array state
        setDogCategory(dogCategory);
        // set property of "findObject" based on new array
        findObject.category = dogCategory;
        // set FindObject 
        setFindObject(findObject);
        //* determing which section was checked
      } else if (event.target.name === "house") {
        // add selected box to search array
        house.push(event.target.id);
        // set search array state
        setHouse(house);
        // set property of "findObject" based on new array
        findObject.homeSize = house;
        // set FindObject 
        setFindObject(findObject);
        //* determing which section was checked
      } else {
        // add selected box to search array
        grooming.push(event.target.id);
        // set search array state
        setGrooming(grooming);
        // set property of "findObject" based on new array
        findObject.grooming = grooming;
        // set FindObject 
        setFindObject(findObject);
      }
    } else {
      // handle Uncheck
      // remove object properties when unchecked

      //* determine which box was checked
      if (event.target.name === "activity") {
        for (var i = 0; i < activityLevel.length; i++) {
          // find unchecked element in search array
          if (activityLevel[i] === event.target.id) {
            // filter out said element
            activityLevel = activityLevel.filter(function (el) {
              return el !== event.target.id;
            });
          }
        }
        // set property on findObject with element filtered out
        findObject.exercise = activityLevel;
        // if search array is empty fill array because client doesn't care about current section
        if (!activityLevel.length) {
          setActivityLevel (starterObject.exercise);
        }
        // set state based on new array
        setActivityLevel(activityLevel);
        setFindObject(findObject);
        //* determine which box was checked
      } else if (event.target.name === "category") {
        for (var i = 0; i < dogCategory.length; i++) {
          // find unchecked element in search array
          if (dogCategory[i] === event.target.id) {
            // filter out said element
            dogCategory = dogCategory.filter(function (el) {
              return el !== event.target.id;
            });
          }
        }
        // set property on findObject with element filtered out
        findObject.category = dogCategory;
        // if search array is empty fill array because client doesn't care about current section
        if (!dogCategory.length) {
          findObject.category=  starterObject.category;
        }
        // set state based on new array
        setDogCategory(dogCategory);
        setFindObject(findObject);
        //* determine which box was checked
      } else if (event.target.name === "house") {
        for (var i = 0; i < house.length; i++) {
          // find unchecked element in search array
          if (house[i] === event.target.id) {
            // filter out said element
            house = house.filter(function (el) {
              return el !== event.target.id;
            });
          }
        }
        // set property on findObject with element filtered out
        findObject.homeSize = house;
        // if search array is empty fill array because client doesn't care about current section
        if (!house.length) {
          findObject.homeSize=  starterObject.homeSize;
        }
        // set state based on new array
        setHouse(house);
        setFindObject(house)
        //* determine which box was checkeddObject(findObject);
      } else {
        for (var i = 0; i < grooming.length; i++) {
          // find unchecked element in search array
          if (grooming[i] === event.target.id) {
            // filter out said element
            grooming = grooming.filter(function (el) {
              return el !== event.target.id;
            });
            
          }
        }
        // set property on findObject with element filtered out
        findObject.grooming = grooming;
        if (!grooming.length) {
          grooming=  starterObject.grooming;
        }
        // if search array is empty fill array because client doesn't care about current section
        // set state based on new array
        setGrooming(grooming);
        setFindObject(findObject);
      }
    }
    // SUPERCOOL refetch operation requeries based on object dynamically created in this function
    refetch({ exercise:findObject.exercise,category: findObject.category,grooming:findObject.grooming,homeSize:findObject.homeSize });
  };

  //fill in case empty array

  return (
    <>
      {" "}
      {/*  wont send results till done loading and no error  */}
      {!loading && !error && (
        //   {/* section for search sidbar */}
        <section>
          <div>
            <div id="sideBar">
              <h1>Activity Level</h1>
              <label htmlFor="activity">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Up to 30 minutes per day"
                  name="activity"
                />
                Up to 30 minutes per day
              </label>
              <br />
              <label htmlFor="activity">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Up to 1 hour per day"
                  name="activity"
                />
                Up to 1 hour per day
              </label>
              <br />
              <label htmlFor="activity">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="More than 2 hours per day"
                  name="activity"
                />
                More than 2 hours per day
              </label>

              <hr />
              <h1>Category</h1>
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Toy"
                  name="category"
                />
                Toy
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Hound"
                  name="category"
                />
                Hound
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Terrier"
                  name="category"
                />
                Terrier
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Utility"
                  name="category"
                />
                Utility
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Working"
                  name="category"
                />
                Working
              </label>
              <br />
              <label htmlFor="category">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Pastoral"
                  name="category"
                />
                Pastoral
              </label>

              <br />

              <hr />

              <h1>Grooming</h1>
              <label htmlFor="grooming">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="Every day"
                  name="grooming"
                />
                Every day
              </label>
              <label htmlFor="grooming">
                <input
                  type="checkbox"
                  //   onchange function to create new object for search
                  onChange={newChange}
                  id="More than once a week"
                  name="grooming"
                />
                More than once a week
              </label>
              <br />
              <label htmlFor="grooming">
                <input
                  type="checkbox"
                  // onchange function to create new object for search
                  onChange={newChange}
                  id="Once a week"
                  name="grooming"
                />
                Once a week
              </label>
              <br />
              <hr />

              <h1>House Size</h1>
              <label htmlFor="house">
                <input
                  type="checkbox"
                  // onchange function to create new object for search
                  onChange={newChange}
                  id="Flat/ Apartment"
                  name="house"
                />
                Flat/ Apartment
              </label>
              <label htmlFor="house">
                <input
                  type="checkbox"
                  // onchange function to create new object for search
                  onChange={newChange}
                  id="Large house"
                  name="house"
                />
                Large house
              </label>
              <br />
              <label htmlFor="house">
                <input
                  type="checkbox"
                  // onchange function to create new object for search
                  onChange={newChange}
                  id="Small house"
                  name="house"
                />
                Small house
              </label>
              <br />
              <hr />
            </div>
          </div>
          {/* fill with data from search */}
          <table>
            <thead>
              <tr>
                <th>Breed</th>
                <th></th>
                <th>Adopt</th>
                <th>Breed info</th>
              </tr>
            </thead>
            <tbody>
              {/* dynamically create rows from DogRow based on last query */}
              {data.facetSearch.map((dog) => (
                <BreedRow key={dog.id} dog={dog}  setBreed= {setBreed} setCurrent={setCurrent}/>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
