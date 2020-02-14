//var currline = [];
function takeANumber(currline, name)
{
  currline.push(name);
  return (`Welcome, ${name}. You are number ${Math.abs(currline.indexOf(name))} in line.`)
  
}