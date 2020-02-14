//var currline = [];
function takeANumber(currline, name)
{
  currline.push(name);
  return (`Welcome, ${name}. You are number ${Math.abs(currline.findIndex(name))} in line.`)
  
}