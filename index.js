//var currline = [];
function takeANumber(currline, name)
{
  currline.concat(name);
  return (`Welcome, ${name}. You are number ${Math.abs(currline.indexOf(name))} in line.`)
  
}