// Code your solution in this file!
function distanceFromHqInBlocks (blocks){
    
    if (Number(blocks) > 42){
        return Number(blocks) - 42;
          }else if(42 > Number(blocks)){
        return 42 - Number(blocks)
      }
    }

    function distanceFromHqInFeet (blocks){
    let distanceInBlocks = distanceFromHqInBlocks(blocks)
    return distanceInBlocks * 264
    }

    function distanceTravelledInFeet (start , destination){
if (Number(destination) > Number(start)){
    return (Number(destination) - Number(start)) * 264;
}
else (Number(start) > Number(destination)) ;{
    return (Number(start) - Number(destination))*264;
}
    }

    function calculatesFarePrice (start, destination){
        let calculatesFare = distanceTravelledInFeet(start, destination)
          if (calculatesFare <= 400){
            return 0
          }
          else if (calculatesFare  > 400 && calculatesFare < 2000) {
            return ((distanceTravelledInFeet(start, destination))-400)*0.02
          }
else if ( calculatesFare > 2000 && calculatesFare < 2500){
    return 25
}
else (calculatesFare > 2500);{
    return "cannot travel that far"
}
    }



    
    
    
    
    

    

