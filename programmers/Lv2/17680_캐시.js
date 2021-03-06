function solution(cacheSize, cities) {
    var answer = 0;
  
    if (cacheSize == 0)
      return (cities.length * 5);
  
    var cache = [];
  
    for (let i = 0; i < cities.length; i++)
    {
      if (cache.indexOf(cities[i].toUpperCase()) < 0)
      {
        if (cache.length == cacheSize)
          cache.shift();
        cache.push(cities[i].toUpperCase());
        answer += 5;
      }
      else
      {
        let index = cache.indexOf(cities[i].toUpperCase());
        cache.splice(index, 1);
        cache.push(cities[i].toUpperCase());
        answer += 1;
      }
    }
    return answer;
  }
  
  function solution(cacheSize, cities) {
    let answer = 0;
  
    cities = cities.map((city) => city.toUpperCase());
    let cache = [];
  
    if (cacheSize === 0) {
      return cities.length * 5;
    }
  
    for(let i of cities){
      i = i.toUpperCase();
      if (!cache.includes(i)){
        if (cache.length == cacheSize){
          cache.shift();
        } 
        answer += 5;
      } else{
        let pos = cache.indexOf(i);
        cache.splice(pos, 1);
        answer += 1;
      }
      cache.push(i);
    }
    return answer;
  } // 2021-06-22
  
  // https://programmers.co.kr/learn/courses/30/lessons/17680
  
  var cities;
    
  cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
  
  console.log("after  : ", solution(3, cities));
  console.log("answer : ", 50);
  console.log("\n");
  
  cities = 	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"];
  console.log("after  : ", solution(3, cities));
  console.log("answer : ", 21);
  console.log("\n");
  
  cities = 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"];
  console.log("after  : ", solution(2, cities));
  console.log("answer : ", 60);
  console.log("\n");
  
  cities = 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"];
  console.log("after  : ", solution(5, cities));
  console.log("answer : ", 52);
  console.log("\n");
  
  cities = ["Jeju", "Pangyo", "NewYork", "newyork"];
  console.log("after  : ", solution(2, cities));
  console.log("answer : ", 16);
  console.log("\n");
  
  cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
  console.log("after  : ", solution(0, cities));
  console.log("answer : ", 25);
  console.log("\n");
  
  cities = ["Jeju", "Jeju", "Seoul", "NewYork", "LA"];
  console.log("after  : ", solution(3, cities));
  console.log("answer : ", 21);
  console.log("\n");
  
  cities = ["SEOUL", "SEOUL", "SEOUL"];
  console.log("after  : ", solution(5, cities));
  console.log("answer : ", 7);
  console.log("\n");
  
  cities = ["A", "B", "C", "A", "C", "D"];
  console.log("after  : ", solution(3, cities));
  console.log("answer : ", 22);
  console.log("\n");
  
  cities = ["A", "B", "A", "B", "A", "B"];
  console.log("after  : ", solution(8, cities));
  console.log("answer : ", 14);
  console.log("\n");