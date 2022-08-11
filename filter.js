var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var invalidEntries = 0;
  
  function filterByID(obj) {
    if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
      return true;
    } else {
      invalidEntries++;
      return false;
    }
  }
  
  var arrByID = arr.filter(filterByID);
  
  console.log('Filtered Array\n', arrByID);
  // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries);
  // Number of Invalid Entries = 4
  
  
  var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
  
  /**
   * Array filters items based on search criteria (query)
   */
  function filterItems(query) {
    return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }
  
  console.log(filterItems('ap')); // ['apple', 'grapes']
  console.log(filterItems('an')); // ['banana', 'mango', 'orange']