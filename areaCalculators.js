const calculateRectangleArea = (length,width) =>{
  const rectangArea = length * width;
  if(length < 0 || width < 0) {
    return undefined;
  }
  return rectangArea;
}
console.log(calculateRectangleArea(10,5));
console.log(calculateRectangleArea(1.5,2.5));
console.log(calculateRectangleArea(10,-5));


const calculateTriangleArea = (base,height) =>{
  const triangleArea = base * height / 2;
  if(base < 0 || height < 0 ){
    return undefined;
  }
  return triangleArea;
}
console.log(calculateTriangleArea(10,5));
console.log(calculateTriangleArea(3,2.5));
console.log(calculateTriangleArea(10,-5));

const calculateCircleArea = (radius) =>{
  const circleArea = Math.PI * radius * radius;
  if(radius<0){
    return undefined;
  }
  return circleArea;
}
console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(1.5));