/*json1 = { name:"harshi",reg:1285,design:"btech"};
console.log(json1.name);
console.log(json1.reg);
console.log(json1.design);*/

/*json2 =[ {
    name1:"harshi",
    reg:1285,
    design:"btech"
},
  {
      name2:"gayatri",
      reg:598,
      design:"cse"
  }];
  console.log(json2[0].design);*/


  json3 = {
      name:"harshi",
      reg:1285,
      details:function funcname() {
          console.log(this.name+this.reg);
      }
  }
  console.log(json3.details());


