exports.get = function (req, res) {
   var jsonData = {};
   jsonData.labels = ["date 1", "date2", " date 3 ", "date 4", "date 5 ", "date 6", "date7"];
    jsonData.checkinData = [0, 10, 5, 2, 20, 30, 45];
    jsonData.apptData = [1, 10, 7, 5, 22, 31, 48];
    
   res.send((jsonData));
};
