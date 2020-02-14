//var currline = [];
function takeANumber(currline, name)
{
  currline.push(name);
  return (`Welcome, ${name}. You are number ${(currline.length)} in line.`)
  
}
function nowServing(currline)
{
  if(currline == [])
  {
    
  }
  return (currline[0])
  currline.slice(1)
}