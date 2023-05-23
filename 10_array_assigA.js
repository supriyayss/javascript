 const arrayFruit = ["Banana","Orange","Apple","Mango","Water Melon"];
//  console.log(`Log the first and last element on console`);
    console.log("Given Array is:", arrayFruit);
    const firstElement = arrayFruit[0];
    const lastElement = arrayFruit[arrayFruit.length-1];
    console.log(`First Element: ${firstElement} | Last Element: ${lastElement}`);
    console.log(``);

    const addElemFirst = arrayFruit.unshift("Papaya");
    console.log("Adding Element before Banana:", arrayFruit);
    console.log(``);

    const removeElem = arrayFruit.splice(4,1);
    console.log("Remove Mango Element in array:", removeElem);
    console.log(arrayFruit);
    console.log(``);

    const addElemLast = arrayFruit.push("Pineapple");
    console.log("Adding Element in last position:", arrayFruit);
    console.log(``);

    const addElemMiddle = arrayFruit.splice(4,0,"Dragon Fruit");
    console.log("Adding element in Middle position:",arrayFruit);
    console.log(``);

    const replaceElem = arrayFruit.splice(2,1,"Kiwi");
    console.log("Replace element Orange to Kiwi:", arrayFruit);
    console.log(``);

    const sliceElem = arrayFruit.slice(1,4);
    console.log("Element Starting from 1 to 4:",sliceElem);
    console.log(``);

    const lastThreeElem = arrayFruit.slice(arrayFruit.length-3,);
    console.log("Last three element in array:", lastThreeElem);